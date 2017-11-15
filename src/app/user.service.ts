import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private _http;

  constructor(http: HttpClient) {
      this._http = http;
     }

  private users;

  // [
  //   {
  //     fullName: "John",
  //     email: "john@example.com",
  //     isChoosen: false
  //   },
  //   {
  //     fullName: "Johanna",
  //     email: "johanna@example.com",
  //     isChoosen: false
  //   },
  //   {
  //     fullName: "Brian",
  //     email: "brian@example.com",
  //     isChoosen: false
  //   }
  // ];

  private _choosenUser;

  // ПОЛУЧЕНИЕ СПИСКА ПОЛЬЗОВАТЕЛЕЙ
  public getUsers () {
    this.users = this._http.get('http://test-api.javascript.ru/v1/rustamizh/users');
    for (let i = 0; i < this.users.length; i++) {
      this.users[i].isChoosen = false;
    }
    return this.users;
  }


  // ВЫДЕЛЕНИЕ ЭЛЕМЕНТА
  public chooseUser(user) {
    user.isChoosen = !user.isChoosen;

    if (this._choosenUser) {
      this._choosenUser.isChoosen = !this._choosenUser.isChoosen;
    }
    this._choosenUser = user;
   }


  // УДАЛЕНИЕ USER
  public removeUser (user) {
    console.log(user);
    this._http.delete('http://test-api.javascript.ru/v1/rustamizh/users/' + user._id).subscribe();
  }


  // ДОБАВЛЕНИЕ USER
  public addUser(user) {
    console.log(user);
    this._http.post('http://test-api.javascript.ru/v1/rustamizh/users', user).subscribe();
  }
}

