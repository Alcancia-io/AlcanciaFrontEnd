import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PaypalService } from 'src/app/services/paypal.service';
import {ConfirmOrder} from 'src/app/models/paypalOrder';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SuccessfullComponent } from '../../../components/successfull/successfull';
import { TransactionDetail } from '../../../models/transactionDetails';


@Component({
  selector: 'app-succefulDeposit',
  templateUrl: '../SuccessfulDeposit/SuceessfulDeposit.page.html', 
  styleUrls: ['../SuccessfulDeposit/SuccessfulDesposit.page.scss'],
})
export class SuccessfulComponent implements OnInit {
  @Input() amount = '';
  constructor(private router: Router,
    private paypalService: PaypalService) { }
    
    transactionId:string;
    Date:string;
    Name:string;
    surname:string;
    TotalAmount:string;
    NetAmount:string;
    PaypalFee:string; 

  ngOnInit() {
    const transactionDetailData = history.state.data;
    console.log(transactionDetailData);
    this.transactionId = transactionDetailData.response.id;
    this.Date = transactionDetailData.response.create_time;
    this.Name = transactionDetailData.response.payer.name.given_name;
    this.surname = transactionDetailData.response.payer.name.surname;
    this.TotalAmount = transactionDetailData.response.gross_amount;
    this.NetAmount = transactionDetailData.response.net_amount;
    this.PaypalFee = transactionDetailData.response.payapal_fee;
  }

  backToMainMenu() {
    this.router.navigate(['/main-screen']);
  }

   
}