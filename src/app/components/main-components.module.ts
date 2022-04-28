import { DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { NavigationToolbarComponent } from "./navigation-toolbar/navigation-toolbar.component";
import { TopNavigationToolbarComponent } from "./top-navigation-toolbar/top-navigation-toolbar.component";
import { SuccessfullComponent } from "./successfull/successfull";
import { PaypalPaymentOptionsComponent } from "./paypal/paypalPaymentOptions/paypalPaymentOptions.component";
import { TooltipComponent } from "./tooltip/tooltip.component"; 

@NgModule({
    imports: [
        IonicModule
      ],
  declarations: [NavigationToolbarComponent, TopNavigationToolbarComponent, SuccessfullComponent, PaypalPaymentOptionsComponent, TooltipComponent],
  exports: [NavigationToolbarComponent, TopNavigationToolbarComponent, SuccessfullComponent, PaypalPaymentOptionsComponent, TooltipComponent]
})



export class MainComponentsModule {

}
