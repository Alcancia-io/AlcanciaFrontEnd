import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, iif, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { first, switchMap } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

import { TokenService } from './token.service';

import { LoginModel } from '../models/login';
import { UserModel } from '../models/userModel';

interface User {
  provider?: string;
  uid?: string;
  auth?: string;
  currentUser?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userCollection: AngularFirestoreCollection<any>;
  collection: any;
  user$: Observable<User>;
  userLoggedIn$: Observable<boolean>;
  user:User;
  token: string;
  AccessToken:string = "";
  LoginModel: Observable<LoginModel>;

  constructor(
    private fireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private tokenService: TokenService,
  ) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          return this.afs.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }// end of constructor


  async login(email:string, password:string) {
    const loading = await this.loadingCtrl.create({
      message: 'Autenticando...',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(async (data) => {
        if (!data.user.emailVerified) {
          loading.dismiss();
          this.toast('Porfavor verificar su correo!', 'danger');
          this.logout();
        } else {
          (await this.fireAuth.currentUser).getIdToken()
            .then((token) => this.tokenService.setToken(token));
          loading.dismiss();
          this.router.navigate(['/main-screen']);
        }
      }).catch((error) =>{
        console.log(error);
        loading.dismiss();
        this.toast('Correo electrónico o contraseña incorrecta','danger');
      });
  } // end of login

  async isUserloggedIn() {
    await this.fireAuth.onAuthStateChanged((user) => {
      console.log('service:' +user);
      if (user && user.uid) {
       return  true;
      } else {
        return  false;
      }
    });

    return false;
  }

  async registerUser(userModel){
    const usermodel = new UserModel;

    usermodel.email = "";
    usermodel.name = "";
    usermodel.lastname = "";
  }

  async logout() {
   await this.fireAuth.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    });
  } // end of logout

  async toast(message, status) {
    const toast = await this .toastr.create({
      message:message,
      position: 'top',
      color: status,
      duration: 2000
    });

    toast.present();
  } // end of toast
}
