import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFullCardsComponent } from './cards/application-full-cards/application-full-cards.component';
import { ApplicationShortCardComponent } from './cards/application-short-card/application-short-card.component';
import { ApplicationActionCardComponent } from './cards/application-action-card/application-action-card.component';



@NgModule({
  declarations: [
    ApplicationFullCardsComponent,
    ApplicationShortCardComponent,
    ApplicationActionCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ApplicationFullCardsComponent,
    ApplicationShortCardComponent,
    ApplicationActionCardComponent
  ]
})
export class SharedModule { }
