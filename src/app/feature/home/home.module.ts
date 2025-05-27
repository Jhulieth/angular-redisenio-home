import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';
import { MedicalAttentionsComponent } from './components/medical-attentions/medical-attentions.component';
import { QuickAcctionsComponent } from './components/quick-acctions/quick-acctions.component';
import { InterestComponent } from './components/interest/interest.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ApplicationStatusComponent,
    MedicalAttentionsComponent,
    QuickAcctionsComponent,
    InterestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
