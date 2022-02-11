import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AppCookieService } from '../../services/appcookie.service';
import { USER_NAME } from 'src/app/guards/auth.guard';
import { UserModel } from '../../models/userModel';
import { UserService } from '../../services/user.service';
import { FormGroup, Validators,FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  passwordMatch: boolean;
  
  exform: FormGroup;

  constructor(
    private afs: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router,
    private appCookie: AppCookieService,
    private userService: UserService,
    public formBuilder: FormBuilder,
  ) { }

  public errorMessages = {
    
    name: [
      { type: 'required', message: 'Nombre es requerido' }
    ],
    surname: [
      { type: 'required', message: 'Apellidos es requerido' }
    ],
    email: [
      { type: 'required', message: 'Email es requerido' },
      { type: 'pattern', message: 'El formato de email no es correcto'}
    ],
    password: [
      { type: 'required', message: 'Una contraseña es requerida' },
      { type: 'minlength', message: 'Debe tener una longitud minima de 8 caracteres'}
    ],
    confirmPassword: [
      { type: 'required', message: 'La confirmacion de contraseña es requerida' },
      { type: 'mustMatch', message: 'La contraseña de confirmacion debe coincidir con la contraseña' }

    ]
  };

  ngOnInit() {
    
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)]),
      'confirmPassword': new FormControl(null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)]),
    })
  }

  
  async signup(){
    if (this.exform.value.name && this.exform.value.email && this.exform.value.password) {
      const loading = await this.loadingCtrl.create({
        message: 'Loading...',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.fireAuth.createUserWithEmailAndPassword(this.exform.value.email, this.exform.value.password).then((resp) => {

        this.afs.collection('users').doc(resp.user.uid).set({
          'userId': resp.user.uid,
          'name': this.exform.value.name,
          'surname': this.exform.value.surname,
          'email': this.exform.value.email,  
          'swapScreenLoaded': false,
          'balance': 0,
          'createdAt': Date.now()
        });
        
          resp.user.sendEmailVerification();
        }).then(() => {
          loading.dismiss();
          this.appCookie.set(USER_NAME,`${this.exform.value.name}`);
          this.toast('Se envio un email de confirmacion a su correo electrónico', 'success');
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        });
      } else {
        this.toast('Favor completar los campos!', 'danger');
      }
  }//end of signup

  // async addUserData(theUser: UserModel){
  //   await this.userService.addUserData(theUser);
  // }

  checkPassword() { 
    if(this.exform.value.password === this.exform.value.confirmPassword) {
      this.passwordMatch = false;
    } else {
      this.passwordMatch = true;
    }
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 5000
    });

    toast.present();
  }//end of toast

  loginPage() {
    this.router.navigate(['/login']);
  }
}
