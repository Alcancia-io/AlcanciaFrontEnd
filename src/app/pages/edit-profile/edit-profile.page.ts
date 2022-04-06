import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  /* VARIABLES */
  isEditing = false;
  form = {
    name: {
      label: "Nombre",
      placeholder: "Juan",
      value: "Juan"
    },
    lastName: {
      label: "Apellidos",
      placeholder: "",
      value: "Alcántara Minaya"
    },
    email: {
      label: "Correo",
      placeholder: "",
      value: "minaya@alcancia.io"
    },
    phone: {
      label: "Teléfono",
      placeholder: "",
      value: "+524421231234"
    },
  }

  /* METHODS */
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.doFetch();
  }

  /**
   * Retrieves the user information and balance
   */
  async getUserData () {
    let user = await this.userService.getUser();
    console.debug(user);
  }

  /**
   * Perform all the initial async retrieval
   */
  async doFetch() {
    await this.getUserData();
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
  }
}
