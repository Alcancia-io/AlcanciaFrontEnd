import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage){
    this.init();
  }

  init(){
     this.storage.create();
  }

  async getData(theKey){
    let data = sessionStorage.getItem(theKey) || [];  
    return data;
  }

  async addData(theItem, theKey){
    const storedData = await this.storage.get(theKey) || [];
    storedData.push(theItem);
    return await this.storage.set(theKey, storedData);
  }
}
