import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawPageRoutingModule } from './withdraw-routing.module';

import { WithdrawPage } from './withdraw.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MainComponentsModule } from 'src/app/components/main-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    ReactiveFormsModule,
    MainComponentsModule,
    ComponentsModule,
    WithdrawPageRoutingModule
  ],
  declarations: [WithdrawPage]
})
export class WithdrawPageModule {}
