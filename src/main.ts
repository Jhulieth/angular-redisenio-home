import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// --- TU CÓDIGO DE REGISTRO CONDICIONAL ---

if (environment.production) { // Esto es importante para que el SW solo se registre en producción
  if ('serviceWorker' in navigator) {
    // Función para detectar si estamos en un WebView de iOS 15.2
    function isIOS15WebView(): boolean {
      const ua = window.navigator.userAgent;
      // Una expresión regular más robusta podría ser mejor para diferentes versiones de iOS 15.x
      // Por ejemplo, para iOS 15.x en general: /iPhone OS 15_\d/.test(ua)
      // Pero si tu problema es específico de 15.2, tu condición es válida.
      const isIOS15 = ua.includes('iPhone OS 15_'); // O ua.includes('iPhone OS 15_2')
      const isWebView = !ua.includes('Safari'); // Si no es Safari, probablemente es un WebView

      // Puedes refinar esta lógica si encuentras falsos positivos/negativos
      // Por ejemplo, puedes añadir: ua.includes('Version/') para detectar Safari
      // O buscar patrones de WKWebView específicos si es posible.
      // Sin embargo, !ua.includes('Safari') es un buen indicador general para un WebView.
      return isIOS15 && isWebView;
    }

    // Registrar el Service Worker solo si no es un WebView de iOS 15.x problemático
    if (!isIOS15WebView()) {
      navigator.serviceWorker.register('/ngsw-worker.js').then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      }).catch(error => {
        console.error('Fallo en el registro del Service Worker:', error);
      });
    } else {
      console.warn('Service Worker NO registrado: detectado iOS 15.x WebView problemático.');
    }
  } else {
    console.warn('El navegador no soporta Service Workers.');
  }
} else {
  console.log('Service Worker no registrado en modo de desarrollo.');
}

// --- FIN DE TU CÓDIGO ---
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
