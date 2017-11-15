import { Component, OnChanges, OnInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public users;

  public message;

  private _userService;

  private _newUser;

  // УДАЛЕНИЕ КАРТОЧКИ
  public deleteUser(user) {
    this._userService.removeUser(user);
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  // ВЫБОР КАРТОЧКИ
  public chooseCard(user) {
    console.log(user);
    this._userService.chooseUser(user);
  }

  // ДОБАВЛЕНИЕ КАРТОЧКИ
  public addUser(name, email) {
    if (!name || !email){
      this.message = "write name and email";
      return;
    }

    this._newUser = {
      fullName: name,
      email: email,
      isСhoosen: false
    }

    this.message = "";
    this._userService.addUser(this._newUser);
    this._userService.getUsers().subscribe(users => this.users = users);
    console.log(this._newUser);
  }

  constructor(userService: UserService) {
    this._userService = userService;
  }

  ngOnInit() {
    // this.users = this._userService.getUsers();
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  ngOnChange () {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

}