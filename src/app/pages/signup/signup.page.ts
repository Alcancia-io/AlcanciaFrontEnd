import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { USER_NAME } from 'src/app/guards/auth.guard';
import { UserModel } from '../../models/userModel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  user: UserModel;
  passwordMatch: boolean;

  constructor(
    private afs: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router,
    private storageService: StorageService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  async signup(){
    if (this.name && this.email && this.password) {
      const loading = await this.loadingCtrl.create({
        message: 'Loading...',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.fireAuth.createUserWithEmailAndPassword(this.email, this.password).then((resp) => {

        this.afs.collection('users').doc(resp.user.uid).set({
          'userId': resp.user.uid,
          'name': this.name,
          'email': this.email,  
          'swapScreenLoaded': false,
          'balance': 0,
          'createdAt': Date.now()
        });
        
          resp.user.sendEmailVerification();
        }).then(() => {
          loading.dismiss();
          this.storageService.addData({key: USER_NAME, value: `${this.name}`}, USER_NAME);
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
    if(this.password == this.confirmPassword) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
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
