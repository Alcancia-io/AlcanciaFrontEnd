import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { Exchange } from "../models/exchange";
import { ExchangeRepository } from "../repository/exchange.repository";

@Injectable({
  providedIn: 'root'
})

export class ExchangeService { 

  constructor(
    private exchangeRepository: ExchangeRepository
    ){  }

    async exchangeCurrency(theExchangeCurrency: Exchange){
        return await this.exchangeRepository.exchangeCurrency(theExchangeCurrency);
    } 
} 