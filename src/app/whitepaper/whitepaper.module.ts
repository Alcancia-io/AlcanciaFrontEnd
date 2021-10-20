import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhitepaperPageRoutingModule } from './whitepaper-routing.module';

import { WhitepaperPage } from './whitepaper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhitepaperPageRoutingModule
  ],
  declarations: [WhitepaperPage]
})
export class WhitepaperPageModule {}
