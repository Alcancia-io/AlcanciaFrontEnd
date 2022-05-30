import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsBarPageRoutingModule } from './tabs-bar-routing.module';

import { TabsBarPage } from './tabs-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsBarPageRoutingModule
  ],
  declarations: [TabsBarPage]
})
export class TabsBarPageModule {}
