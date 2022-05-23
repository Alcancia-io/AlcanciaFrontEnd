import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
    private storage: Storage | null = null;

    constructor(private _storage: Storage){
        this.init();
    }

    async init() {
        this.storage = await this._storage.create();
    }

    set(key: string, value: any) {
        this.storage?.set(key, value);
    }

    get(key: string) {
        return this.storage?.get(key);
    }
}
