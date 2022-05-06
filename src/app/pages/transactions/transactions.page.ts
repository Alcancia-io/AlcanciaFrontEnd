import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Apollo, gql } from 'apollo-angular';
import { UserService } from '../../services/user.service';
import { User } from  '../../models/user';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor(
    private transactionService: TransactionService,
    private apollo: Apollo,
    private userService: UserService
  ) { }
  transactionHistory: Array<any>;
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
    this.gqGetUserTransactions();
    //this.getUserTransactions();
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
        this.transactionHistory = response;
      } 
    }).catch((error) => {
      console.log(error);
    }); 
  }


  gqGetUserTransactions() {
    this.apollo
      .watchQuery({
        variables: {
          currentPage: 0,
          itemsPerPage: 10,
          userId: 'MMHoNsa1JxhB4hWN2sHGRb4ir4m2'
        },
        query: gql`
        query($userId:ID!, $currentPage: Int!, $itemsPerPage: Int!) {
          getUserTransactions(
            userId: $userId
            currentPage: $currentPage
            itemsPerPage: $itemsPerPage
          ) {
            totalItems
            itemsPerPage
            pages
            hasNextPage
            hasPrevPage
            items {
              transactionsId,
              create_time,
              net_amount
            }
          }
        }`
      })
      .valueChanges.subscribe((result: any) => {
        this.transactionHistory = result.data.getUserTransactions.items;
      });
  }
}
