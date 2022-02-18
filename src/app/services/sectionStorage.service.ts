 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class SectionStorageService {

    constructor(){}

    saveData(key: string, value: string){
        sessionStorage.setItem(key, value);
    }

    getData(key:string){
        let data = sessionStorage.getItem(key);
        return data;
    }
}


