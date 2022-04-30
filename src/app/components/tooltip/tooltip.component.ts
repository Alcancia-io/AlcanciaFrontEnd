import { Component, Input, OnInit } from '@angular/core';  
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() tooltipMessage: string;
  constructor(public atrCtrl: AlertController) {}
  
  async showAlert() {
    let alert = this.atrCtrl.create({ 
      header: 'Información', 
      message:  this.tooltipMessage,
      buttons: ['OK'],
    });
    (await alert).present();
  }
  ngOnInit() {}

}
