import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: [Validators.required, Validators.email],
      password: [Validators.required, Validators.minLength(8)]
    });
  }

  async login(){
    const loading = await this.loadingController.create();
    await loading.present();

    // this.authService.login(this.credentials.value).subscribe(
    //   async (res) => {
    //     await loading.dismiss();
    //     this.router.navigateByUrl('/main-screen', {replaceUrl: true});
    //   }, async (res) => {
    //     await loading.dismiss();
    //     const alert = await this.alertController.create({
    //       header: 'Error de inicio de sesion',
    //       message: 'res.error.error',
    //       buttons: ['OK'],
    //     });

    //     await alert.present();
    //   }
    // )
  }

}
