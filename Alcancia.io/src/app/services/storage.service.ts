import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

const INTRO_KEY = 'intro-seen';

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

  getIntroData(){
    return this.storage.get(INTRO_KEY) || [];
  }

  async addIntroData(item){
    const storedData = await this.storage.get(INTRO_KEY) || [];
    storedData.push(item);
    return this.storage.set(INTRO_KEY, storedData);
  }
}
