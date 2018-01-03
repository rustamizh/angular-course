import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users;

  public message;

  private _userService;

  private _newUser;

  private choosenUser;


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
