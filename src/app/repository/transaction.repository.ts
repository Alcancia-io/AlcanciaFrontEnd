import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";  
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SectionStorageService } from '../services/sectionStorage.service';
 

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
   
}