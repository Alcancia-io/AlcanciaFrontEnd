import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwapPageRoutingModule } from './swap-routing.module';

import { MainComponentsModule } from 'src/app/components/main-components.module';

import { SwapPage } from './swap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwapPageRoutingModule,
    MainComponentsModule
  ],
  declarations: [SwapPage]
})
export class SwapPageModule {}
