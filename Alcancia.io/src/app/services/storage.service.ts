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

  getData(theKey){
    return this.storage.get(theKey) || [];
  }

  async addData(theItem, theKey){
    const storedData = await this.storage.get(theKey) || [];
    storedData.push(theItem);
    return this.storage.set(theKey, storedData);
  }
}
