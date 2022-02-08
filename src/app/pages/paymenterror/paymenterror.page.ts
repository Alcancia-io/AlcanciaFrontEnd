import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymenterror',
  templateUrl: './paymenterror.page.html',
  styleUrls: ['./paymenterror.page.scss'],
})
export class PaymenterrorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToMainMenu() {
    this.router.navigate(['/']);
  }
}
