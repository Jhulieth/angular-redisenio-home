import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFullCardsComponent } from './cards/application-full-cards/application-full-cards.component';
import { ApplicationShortCardComponent } from './cards/application-short-card/application-short-card.component';



@NgModule({
  declarations: [
    ApplicationFullCardsComponent,
    ApplicationShortCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ApplicationFullCardsComponent,
    ApplicationShortCardComponent
  ]
})
export class SharedModule { }
