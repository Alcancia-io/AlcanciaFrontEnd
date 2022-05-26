import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';

/* COMPONENTS */
import { 
  OinkButtonComponent 
} from "../../components/oink-button/oink-button.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  declarations: [
    WelcomePage,
    OinkButtonComponent
  ]
})
export class WelcomePageModule {}
