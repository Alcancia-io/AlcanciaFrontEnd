import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-navigation-toolbar',
  templateUrl: './top-navigation-toolbar.component.html',
  styleUrls: ['./top-navigation-toolbar.component.scss'],
})
export class TopNavigationToolbarComponent implements OnInit {

  constructor(
    private alertController: AlertController,
   private authService: AuthenticationService,
    ) { }

  ngOnInit() {}

  async logout() {
    this.presentAlertConfirm();
    
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estas seguro de que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Confirmar',
          handler: async () => {
            await this.authService.logout();
          }
        }
      ]
    });

    await alert.present();
  }

}
