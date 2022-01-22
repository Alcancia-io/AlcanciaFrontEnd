import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypalpaymentoptions',
  templateUrl: './paypalpaymentoptions.page.html',
  styleUrls: ['./paypalpaymentoptions.page.scss'],
})
export class PaypalpaymentoptionsPage implements OnInit {

  constructor() { }
  depositAmount: string;
  ngOnInit() {
    const paymentInfo = history.state.data;  
    this.depositAmount = paymentInfo.newPaypalOrder.amount;
    
  }

}
