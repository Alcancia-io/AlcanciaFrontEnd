import { Component, OnInit } from '@angular/core';

//Local storage
import { FormGroup, Validators, FormControl } from '@angular/forms';
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
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        "", [Validators.required, Validators.email]
      ),
      password: new FormControl(
        "", [Validators.required]
      )
    });
  }

  async submit() {
    if (!this.loginForm.valid) return;
    try {
      const user = await this.userService.login(
        this.loginForm.get("email").value,
        this.loginForm.get("password").value
      );
      this.storage.set("loggedIn", true);
      this.storage.set("name", user.name);
      this.storage.set("surname", user.surname);
    } catch (err) {
      // TODO: Add element with error messages
      console.error(err);
    }
  }
}
