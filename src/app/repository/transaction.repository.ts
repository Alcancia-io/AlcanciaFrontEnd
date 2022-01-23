import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";  
 

@Injectable({
  providedIn: 'root',
})

export class TransactionRepository{
  constructor(
    private httpClientModule: HttpClient,
  ){}

  async getUserTransactions(): Promise<any>{
    return new Promise((resolver) => {
      let subscription: Subscription;
      subscription = this.httpClientModule.get(ALCANCIA_SERVER_URL + '/deposits/index')
          .subscribe(reponse => {
            if (subscription) {
              subscription.unsubscribe();
            }
            resolver( Object.assign(reponse));
            return reponse;
          });
    });
  }
   
}