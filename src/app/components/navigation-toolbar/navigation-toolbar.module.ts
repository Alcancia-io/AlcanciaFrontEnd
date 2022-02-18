import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NavigationToolbarRoutingModule } from "./navigation-toolbar-routing.module";

import { NavigationToolbarComponent } from "./navigation-toolbar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,,
        NavigationToolbarRoutingModule
    ],
    declarations: [NavigationToolbarComponent]
})

export class NavigationToolbarModule {}