import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EXCHANGE_RATE_URL } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";  
import { Exchange, ExchangeResult } from '../models/exchange';
 

@Injectable({
  providedIn: 'root',
})

export class ExchangeRepository{
  constructor(
    private httpClientModule: HttpClient,
  ){}

  async exchangeCurrency(theExchangeValue: Exchange): Promise<ExchangeResult> {
    return new Promise((resolver) => {
        let subscription: Subscription;
        subscription = this.httpClientModule.get(EXCHANGE_RATE_URL + `/pair/${theExchangeValue.FromCurrency}/${theExchangeValue.ToCurrency}`)
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
