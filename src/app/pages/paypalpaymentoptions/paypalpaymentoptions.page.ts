import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-paypalpaymentoptions',
  templateUrl: './paypalpaymentoptions.page.html',
  styleUrls: ['./paypalpaymentoptions.page.scss'],
})
export class PaypalpaymentoptionsPage implements OnInit {

  constructor(private router: Router) { }
  depositAmount: string;
  ngOnInit() {
    const paymentInfo = history.state.data;  
    this.depositAmount = paymentInfo.newPaypalOrder.amount;
    
  }

  backToSwap(){
    this.router.navigate(['/nav/swap']);
  }

}
