import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

  private _http;

  private users = [
    {
      name: "John",
      email: "john@example.com",
      ischoosen: false
    },
    {
      name: "Johanna",
      email: "johanna@example.com",
      ischoosen: false
    },
    {
      name: "Brian",
      email: "brian@example.com",
      ischoosen: false
    }
  ];

  private _choosenUser;

  constructor(http: HttpClient) {
    this._http = http;
   }

  public getUsers () {
    return this.users;
  }

  public chooseUser(user) {
    user.ischoosen = !user.ischoosen;

    if (this._choosenUser) {
      this._choosenUser.ischoosen = !this._choosenUser.ischoosen;
    }
    this._choosenUser = user;
   }

  public removeUser (user) {
    console.log(user);
    this.users = this.users.filter(i => i !== user);
  }

  public addUser(user) {
    this.users.push(user);
  }
}
