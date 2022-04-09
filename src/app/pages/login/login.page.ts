import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

//Local storage
import { AppCookieService } from '../../services/appcookie.service';
import { USER_NAME } from 'src/app/guards/auth.guard';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { StringLike } from '@firebase/util';
import { loadingController } from '@ionic/core';
import { FormGroup, Validators,FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 
  aUsername: string;
  exform: FormGroup;
  resendEmailVerificationButton: boolean = false;

  constructor( 
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private appCookie: AppCookieService,
    private toastr:  ToastController,
    private formBuilder: FormBuilder
  ) { }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email es requerido' },
      { type: 'pattern', message: 'El formato de email no es correcto'}
    ],
    password: [
      { type: 'required', message: 'Una contraseña es requerida' }
    ],
  }

  ngOnInit() {
    this.exform = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)] )
    })
    this.getUsername();
  }

  async getUsername(){
    const username =  await this.appCookie.get(USER_NAME); 
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

  async resendEmailVerification(){
    this.authService.resendEmailConfirmation(this.exform.value.email, this.exform.value.password);
  }

  async login(){
    if (this.exform.value.email && this.exform.value.password) {
      const loading = await loadingController.create({
          message: 'Iniciando Seccion...',
          spinner: 'crescent',
          showBackdrop: true
      });

      loading.present();

      this.authService.login(this.exform.value.email, this.exform.value.password)
          .then((response) => { 
            if (!response.user.emailVerified) {  
              this.resendEmailVerificationButton = true;
            }  
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
