import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccefulDepositRoutingModule } from './SuccessfulDeposit-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { SuccessfulComponent } from './SuccessfulDeposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccefulDepositRoutingModule,
    ComponentsModule
  ],
  declarations: [SuccessfulComponent]
})
export class SuccefulDepositPageModule {}