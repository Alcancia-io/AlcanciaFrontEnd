//NOTES:
// If adding more than one components and do not want to import the other component in the module where is going to be injected.
// Please create another component module for it.

import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";

import { ArrowButtonComponent } from "./arrow-button/arrow-button.component";
import { OinkButtonComponent } from "./oink-button/oink-button.component";
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    ArrowButtonComponent,
    OinkButtonComponent,
    TransactionDetailComponent
  ],
  exports: [
    ArrowButtonComponent,
    OinkButtonComponent,
    TransactionDetailComponent
  ]
})

export class ComponentsModule {}
