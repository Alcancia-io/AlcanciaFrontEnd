import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessfulrequestPageRoutingModule } from './successfulrequest-routing.module';

import { SuccessfulrequestPage } from './successfulrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessfulrequestPageRoutingModule
  ],
  declarations: [SuccessfulrequestPage]
})
export class SuccessfulrequestPageModule {}
