import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoadingController } from "@ionic/angular";

import { DateTime } from "luxon";

import { UserService } from "../../services/user.service";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;
  resendEmailVerificationButton: boolean = false;

  constructor(
    private userService: UserService,
    private storage: StorageService,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        "", [Validators.required, Validators.email]
      ),
      password: new FormControl(
        "", [Validators.required]
      ),
      rememberMe: new FormControl(false)
    });
  }

  async submit() {
    const loading = await this.loadingController.create({
      message: "Iniciando sesión..."
    });
    await loading.present();

    if (!this.loginForm.valid) return;
    try {
      const user = await this.userService.login(
        this.loginForm.get("email").value,
        this.loginForm.get("password").value
      );
      await this.storage.set("loginTimestamp", DateTime.now().toISO());
      this.storage.set("name", user.name);
      this.storage.set("surname", user.surname);
      this.storage.set("rememberMe", this.loginForm.get("rememberMe").value);
      await loading.dismiss();
      this.router.navigate([""]);
    } catch (err) {
      // TODO: Add element with error messages
      await loading.dismiss();
      console.error(err);
    }
  }
}
