import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoveruserPageRoutingModule } from './recoveruser-routing.module';

import { RecoveruserPage } from './recoveruser.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    RecoveruserPageRoutingModule
  ],
  declarations: [RecoveruserPage]
})
export class RecoveruserPageModule {}
