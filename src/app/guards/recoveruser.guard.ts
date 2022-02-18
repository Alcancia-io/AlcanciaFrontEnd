import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

//local storage
import { UserService } from '../services/user.service';
 
@Injectable({
  providedIn: 'root'
})
export class RecoverUserGuard implements CanLoad {
 user;
 constructor(private router: Router, private userService: UserService ){

 }
 
     async canLoad(): Promise<boolean> {
        this.userService.getUser().then(user => {
            if(user.name == undefined || user.surname == undefined){
            this.router.navigate(['/recoveruser']);
            }else { return true;}
        }); 
        return true;
    }
}

