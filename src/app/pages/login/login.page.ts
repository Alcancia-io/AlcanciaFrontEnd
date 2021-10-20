import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

//Local storage
import { StorageService } from '../../services/storage.service';
import { USER_NAME } from 'src/app/guards/auth.guard';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { StringLike } from '@firebase/util';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string;
  password: string;
  aUsername: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private storageService: StorageService,
    private toastr:  ToastController
  ) { }

  ngOnInit() {
    this.getUsername();
  }

  async getUsername(){
    const username =  await this.storageService.getData(USER_NAME); 
    if (username.length > 0 && username[0]) {
      this.aUsername = username[0].value;
    }
  }

  forgot() {
    this.router.navigate(['/forgot-password']);
  }

  singupPage() {
    this.router.navigate(['/signup']);
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

  async login(){
    if (this.email && this.password) {
      const loading = await loadingController.create({
          message: 'Iniciando Seccion...',
          spinner: 'crescent',
          showBackdrop: true
      });

      loading.present();

      this.authService.login(this.email, this.password)
          .then(() => {
            loading.dismiss();
          })
          .catch((error) => {
            loading.dismiss();
            this.toast(error.message, 'danger');
          });
    } else {
      this.toast('Porfavor ingresar tu correo y contraseña', 'danger');
    }
  }

}
