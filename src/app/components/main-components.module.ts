import { DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { NavigationToolbarComponent } from "./navigation-toolbar/navigation-toolbar.component";
import { TopNavigationToolbarComponent } from "./top-navigation-toolbar/top-navigation-toolbar.component";


@NgModule({
    imports: [
        IonicModule
      ],
  declarations: [NavigationToolbarComponent, TopNavigationToolbarComponent],
  exports: [NavigationToolbarComponent, TopNavigationToolbarComponent]
})



export class MainComponentsModule {

}
