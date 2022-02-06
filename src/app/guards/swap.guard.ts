import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

//local storage
import { UserService } from '../services/user.service';
 
@Injectable({
  providedIn: 'root'
})
export class SwapGuard implements CanLoad {
 user;
 constructor(private router: Router, private userService: UserService ){

 }
 
 async canLoad(): Promise<boolean> {

    this.userService.getUser().then(user => {
        if(this.user.swapScreenLoaded && this.user.swapScreenLoaded === true)
        {
            return this.router.navigate[('/tabbar')];
    
        }else {
            return true;
        }   
    });

        return true;
 }
}
