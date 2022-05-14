import { Component, OnInit } from '@angular/core';

//Local storage
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;
  resendEmailVerificationButton: boolean = false;

  constructor( 
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
}
