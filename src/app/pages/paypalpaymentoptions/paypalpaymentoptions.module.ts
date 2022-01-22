import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalpaymentoptionsPageRoutingModule } from './paypalpaymentoptions-routing.module';

import { PaypalpaymentoptionsPage } from './paypalpaymentoptions.page';

import { MainComponentsModule } from 'src/app/components/main-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalpaymentoptionsPageRoutingModule,
    MainComponentsModule
  ],
  declarations: [PaypalpaymentoptionsPage]
})
export class PaypalpaymentoptionsPageModule {}
