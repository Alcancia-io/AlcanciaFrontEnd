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
import { SectionStorageService } from './sectionStorage.service';
import { UserService } from './user.service';
import { AppCookieService } from './appcookie.service';
import { AuthenticationRepository } from '../repository/Authentication.repository';

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
    private sectionStorage: SectionStorageService,
    private userService: UserService,
    private appCookieService: AppCookieService,
    private authenticationRepository: AuthenticationRepository
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
            .then((token => {
              this.tokenService.setToken(token); 
              // this.authenticationRepository.getCookieToken(token);
            }));

          (await this.fireAuth.authState.subscribe(user => { 
            if(user){  
              this.sectionStorage.saveData("UserId", user.uid);
              this.userService.getUser().then(user => {
                this.sectionStorage.saveData("UserEmail", user.email); 
                this.sectionStorage.saveData("Username", user.name);

                if(!user.swapScreenLoaded || user.swapScreenLoaded === false){
                  this.router.navigate(['/swap']);
                }else{
                  this.router.navigate(['/tabbar']);
                }
              });
             
            } 
          }));
          loading.dismiss();
        
          
        }
      }).catch((error) =>{
        console.log(error);
        loading.dismiss();
        this.toast('Correo electrónico o contraseña incorrecta','danger');
      });
  } // end of login


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
