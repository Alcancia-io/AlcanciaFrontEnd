import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

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

}
