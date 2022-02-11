import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RecoverUser } from '../../models/revocerUserModel';
import { Router } from '@angular/router';
import { SectionStorageService } from '../../services/sectionStorage.service';

@Component({
  selector: 'app-recoveruser',
  templateUrl: './recoveruser.page.html',
  styleUrls: ['./recoveruser.page.scss'],
})
export class RecoveruserPage implements OnInit {
  exform: FormGroup;
  constructor(private userService: UserService, private router: Router, private sectionStorage: SectionStorageService) { }
  
  public errorMessages = {
    name:[
      {type: 'required', message: "Nombre es requerido"}
    ],
    surname: [
      {type: 'required', message: "Apellidos es requerido"}
    ]
  }

  ngOnInit() {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required)
    });    
  }

  async recoverUser(){
    if(this.exform.value.name && this.exform.value.surname){
      const userData = new RecoverUser();
      userData.name = this.exform.value.name;
      userData.surname = this.exform.value.surname;
      await this.userService.recoverUser(userData).then(resp => {
        this.sectionStorage.saveData("Username", userData.name);
        this.sectionStorage.saveData("Surname", userData.name);
        this.router.navigate(['/']);
      });
    }
  }
}
