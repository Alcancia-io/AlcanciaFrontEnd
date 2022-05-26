import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalpaymentoptionsPageRoutingModule } from './paypalpaymentoptions-routing.module';

import { PaypalpaymentoptionsPage } from './paypalpaymentoptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalpaymentoptionsPageRoutingModule
  ],
  declarations: [PaypalpaymentoptionsPage]
})
export class PaypalpaymentoptionsPageModule {}
