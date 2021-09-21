import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { StorageService } from '../services/storage.service';
 
export const INTRO_KEY = 'intro-seen';
 
@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
 
 constructor(private router: Router, private storageService: StorageService){

 }
 
 async canLoad(): Promise<boolean> {
      const hasSeenIntro = await this.storageService.getIntroData(INTRO_KEY);      
      if (hasSeenIntro && (hasSeenIntro[0].value === 'true')) {
        return true;
      } else {
        this.router.navigateByUrl('/intro', { replaceUrl:true });
        return false;
      }
 }
}
