import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AppCookieService } from '../../services/appcookie.service';
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
  showPassword = false;
  showConfirmPassword = false;
  passwordInputType = 'password';
  confirmPasswordInputType = 'password';
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
      { type: 'required', message: 'Este campo es obligatorio' }
    ],
    surname: [
      { type: 'required', message: 'Este campo es obligatorio' }
    ],
    phoneNumber: [
      { type: 'required', message: '¿Estas seguro?, verifica tu número de celular' }
    ],
    email: [
      { type: 'required', message: '¿Estas seguro?, verifica tu correo' },
      { type: 'pattern', message: 'El formato de email no es correcto'}
    ],
    password: [
      { type: 'required', message: 'Recuerda que tu contraseña debe ser de mínimo 8 caracteres y debes usar al menos: una mayúsculas, una minúsculas, un número y un símbolo' },
      { type: 'minlength', message: 'Debe tener una longitud minima de 8 caracteres'}
    ],
    confirmPassword: [
      { type: 'required', message: 'La confirmacion de contraseña es requerida' },
      { type: 'mustMatch', message: '¡Ops! Las contraseña no coinciden' } 
    ]
  };

  ngOnInit() {
    
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required),
      'phoneExtension': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)]),
      'confirmPassword': new FormControl(null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)]),
    })
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    this.passwordInputType = this.showPassword ? 'text' : 'password';
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
    this.confirmPasswordInputType = this.showConfirmPassword ? 'text' : 'password';
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
        const currentDate = new Date(); 
        this.afs.collection('users').doc(resp.user.uid).set({
          'userId': resp.user.uid,
          'name': this.exform.value.name,
          'surname': this.exform.value.surname,
          'email': this.exform.value.email,  
          'swapScreenLoaded': false,
          'lastDateUpdatedBalance': new Date(),
          'balance': 0,
          'createdAt': Date.now()
        });
        
          resp.user.sendEmailVerification();
        }).then(() => {
          loading.dismiss();
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
