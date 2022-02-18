import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor(private transactionService: TransactionService) { }
  transationHistory: Array<any>;
  transactionAvailable: boolean = true;
  ngOnInit() {
    this.doFetch();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.doFetch();
    setTimeout(() => {
      console.log('Async operation has ended');
      
      event.target.complete();
    }, 2000);
  }

  doFetch(){
    this.getUserTransactions();
  }

  getUserTransactions(){
    this.transactionService.getUserTransactions().then((response) => { 
      if(response.length == 0){
        this.transactionAvailable == false;
      }else{
        response.forEach(function (item) {  
          const createdDate = new Date(item.create_time);  
          item.create_time =  createdDate.toString().replace('GMT-0400 (Atlantic Standard Time)',''); 
        });  
        this.transationHistory = response;
      } 
    }).catch((error) => {
      console.log(error);
    }); 
  }
}
