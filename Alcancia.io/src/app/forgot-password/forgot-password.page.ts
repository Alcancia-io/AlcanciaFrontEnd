import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string;
  constructor(
    private afAuth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  loginPage(){
    return this.router.navigate(['/login']);
  }

  singupPage(){
    return this.router.navigate(['/signup']);
  }

  async resetPassword() {

    if (this.email) {
      const loading = await this.loadingCtrl.create({
        message: 'Enviando enlace para restablecer contraseña...',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.afAuth.sendPasswordResetEmail(this.email)
        .then(() => {
          loading.dismiss();
          this.toast('Porfavor revisar su correo electrónico!', 'success');
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        })
    } else {
      this.toast('please enter your email adress!', 'danger');
    }
  }

  async toast(message, status) {

    const toast = await this.toastr.create({
       message: message,
       position: 'top',
       color: status,
       duration: 2000
    });

    toast.present();
   }

}
