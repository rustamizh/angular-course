import { Component } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public users;

  public message;

  private _userService;

  private _newUser;

  public deleteUser(user) {

    this._userService.removeUser(user);
    this.users = this._userService.getUsers();
  }

  public chooseCard(user) {
    this._userService.chooseUser(user);
    this.users = this._userService.getUsers();
  }

  public addUser(name, email) {
    if (!name || !email){
      this.message = "write name and email";
      return;
    }

    this._newUser = {
      name: name,
      email: email,
      ischoosen: false
    }

    this.message = "";

    this._userService.addUser(this._newUser);
    this.users = this._userService.getUsers();
    console.log(this._newUser);
  }

  constructor(userService: UserService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.users = this._userService.getUsers();
  }

}
