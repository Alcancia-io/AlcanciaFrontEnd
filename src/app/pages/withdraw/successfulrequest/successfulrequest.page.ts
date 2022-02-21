import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-successfulrequest',
  templateUrl: './successfulrequest.page.html',
  styleUrls: ['./successfulrequest.page.scss'],
})
export class SuccessfulrequestPage implements OnInit {

  constructor(private route: Router) { }

  transactionId: string;
  createdDate: string;
  promiseday: string;
  status: string;
  amount: string;
  oldbalance: string;
  newbalance: string;

  ngOnInit() {
    const withdrawRequestData = history.state.data;
    const createdDate = new Date(withdrawRequestData.response.crateAt);
    const promiseDate = new Date(withdrawRequestData.response.promisedDay);

    this.transactionId = withdrawRequestData.response.UUID;
    this.createdDate = createdDate.toString().replace('GMT-0400 (Atlantic Standard Time)','');
    this.promiseday = promiseDate.toString().replace('GMT-0400 (Atlantic Standard Time)','');
    this.status = withdrawRequestData.response.status;
    this.amount = withdrawRequestData.response.details.amount;
    this.oldbalance = withdrawRequestData.response.details.oldBalance;
    this.newbalance = withdrawRequestData.response.details.newBalance;
  }

  backToMainMenu() {
    this.route.navigate(['/']);
  }

}