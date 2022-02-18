//NOTES:
// If adding more than one components and do not want to import the other component in the module where is going to be injected.
// Please create another component module for it.

import { NgModule } from "@angular/core";
import { ArrowButtonComponent } from "./arrow-button/arrow-button.component";
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule],
  declarations: [ArrowButtonComponent],
  exports: [ArrowButtonComponent]
})

export class ComponentsModule {}
