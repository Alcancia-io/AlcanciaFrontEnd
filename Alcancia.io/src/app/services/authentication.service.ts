import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { getFirestore } from 'firebase/firestore'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { loadingController } from '@ionic/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

const TOKEN_KEY = 'the-token';

interface User {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userCollection: AngularFirestoreCollection<any>;
  collection: any;
  user$: Observable<User>;
  user:User;

  constructor(
    private fireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
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

  async login(email, password) {
    const loading = await this.loadingCtrl.create({
      message: 'Athenticating...',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (!data.user.emailVerified) {
          loading.dismiss();
          this.toast('Please verified your email!', 'danger');
          this.logout();
        } else {
          loading.dismiss();
          this.router.navigate(['/main-screen']);
        }
      }).catch((error) =>{
        loading.dismiss();
        this.toast(error.message,'danger');
      });
  } // end of login

  logout() {
    this.fireAuth.signOut()
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
