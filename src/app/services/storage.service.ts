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
    let status = await this.storage.get(theKey) || [];
    return status;
  }

  async addData(theItem, theKey){
    const storedData = await this.storage.get(theKey) || [];
    storedData.push(theItem);
    return await this.storage.set(theKey, storedData);
  }
}
