import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";  
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SectionStorageService } from '../services/sectionStorage.service';
import { WithDrawModel } from '../models/withdraw';
 

@Injectable({
  providedIn: 'root',
})
 
export class TransactionRepository{


  CurrentUser = "";

  constructor(
    private httpClientModule: HttpClient,
    private fireAuth: AngularFireAuth,
    private sectionStorageService: SectionStorageService
  ){}

  async getUserTransactions(): Promise<any>{ 

      let userId = this.sectionStorageService.getData("UserId");
      return new Promise((resolver) => { 
        let subscription: Subscription;  
        subscription = this.httpClientModule.get(ALCANCIA_SERVER_URL+'/users/'+ userId + '/deposits')
            .subscribe(reponse => {
              if (subscription) {
                subscription.unsubscribe();
              }
              
              resolver( Object.assign(reponse));
              return reponse;
            }); 
     });
    
  } 

  async requestWithdraw(withdrawData: WithDrawModel): Promise<any>{
    return new Promise((resolver) => {
      let subscription: Subscription;
      subscription = this.httpClientModule.post(ALCANCIA_SERVER_URL+'/withdraws', withdrawData).subscribe(response => {
        if(subscription){
          subscription.unsubscribe();
        }

        resolver(Object.assign(response));
        return response;
      })
    })
  }
   
}