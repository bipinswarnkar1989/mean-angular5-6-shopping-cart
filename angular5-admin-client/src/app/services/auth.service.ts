import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn:boolean = false;
  isAdmin:boolean = false;

  constructor() { }

  login(credentials){
    alert(JSON.stringify(credentials))
  }

}
