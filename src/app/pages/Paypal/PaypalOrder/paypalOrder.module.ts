import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalOrderRoutingModule } from './paypalOrder-routing.module';

import { PaypalOrderPage } from './paypalOrder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalOrderRoutingModule
  ],
  declarations: [PaypalOrderPage]
})
export class PaypalOrderPageModule {}