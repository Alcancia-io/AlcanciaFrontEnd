import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaypalService } from 'src/app/services/paypal.service';
import {ConfirmOrder} from 'src/app/models/paypalOrder'; 


@Component({
  selector: 'app-paypalorder',
  templateUrl: '../PaypalOrder/paypalOrder.page.html', 
})
export class PaypalOrderPage implements OnInit {

  constructor(private router: Router,
    private paypalService: PaypalService) { }

  ngOnInit() {
    let params = new URLSearchParams(document.location.search);
    let token = params.get("token");
    console.log('the token:', token);
    let confirmToken = new ConfirmOrder();

    confirmToken.orderToken = token;
    // this.paypalService.confirmOrder(confirmToken).then(response =>{
         
    // }); 
    
  }
   
}