/* DEPRECATION NOTICE */
import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

// TODO: Delete this class after refactoring the places where it is used
@Injectable({
  providedIn: 'root'
})
export class SectionStorageService extends StorageService {
    saveData(key: string, value: any) {
        return this.set(key, value);
    }

    getData(key: string) {
        return this.get(key);
    }
}


