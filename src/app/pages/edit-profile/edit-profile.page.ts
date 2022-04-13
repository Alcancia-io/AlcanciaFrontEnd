import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from  '../../models/user';
import { LoadingController } from '@ionic/angular';

@Component({ selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage {
/* VARIABLES */
  isEditing = false;
  form = {
    name: {
      label: 'Nombre',
      placeholder: '',
      value: 'Juan'
    },
    surname: {
      label: 'Apellidos',
      placeholder: '',
      value: 'Alcántara Minaya'
    },
    email: {
      label: 'Correo',
      placeholder: '',
      value: 'minaya@alcancia.io'
    }
  }
  userData?: User = null;

  /* METHODS */
  constructor(
    private userService: UserService,
    private loadingController: LoadingController
  ) { }

  ionViewWillEnter () {
    this.doFetch();
  }

  fillForm(user: User) {
    const keys = Object.keys(this.form);
    for(let i = 0; i < keys.length; i++) {
      this.form[keys[i]].value = user[keys[i]];
      this.form[keys[i]].placeholder = user[keys[i]];
    }
  }

  /**
   * Retrieves the user information and balance
   */
  async getUserData () {
    return await this.userService.getUser();
  }

  /**
   * Update user information
   */
  async updateUserData () {
    const loading = await this.loadingController.create({
      message: 'Actualizando perfil...'
    });
    await loading.present();
    const user = await this.userService.updateCurrentUser(
      {name: this.form.name.value, surname: this.form.surname.value}
    );
    this.fillForm(user);
    this.isEditing = false;
    await loading.dismiss();
  }


  /**
   * Perform all the initial async retrieval
   */
  async doFetch() {
    this.userData = await this.getUserData();
    this.fillForm(this.userData);
  }


  /**
   * Enables the editing of the profile data
   */
  enableEditing() {
    this.isEditing = true;
  }

  /**
   * Disables the editing of the profile data
   */
  disableEditing() {
    this.isEditing = false;
    if (this.userData) {
      this.fillForm(this.userData);
    }
  }
}
