import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';
import { User } from '../models/user.model';


@Injectable()
export class AuthService {
  isLoggedIn:boolean = false;
  isAdmin:boolean = false;
  userApiUrl:String = 'http://localhost:3001/api/user';
  jwtHelper: JwtHelper = new JwtHelper();
  currentUser:User = new User();
  constructor(
    private http:HttpClient,

  ) { }

  login(credentials):Observable<any>{
    return this.http.post(`${this.userApiUrl}/login`,credentials);
  }

  useToken(token){
    localStorage.setItem('userToken',token);
    const user = this.decodeUserfromToken(token);
    this.setCurrentUser(user);
  }

  decodeUserfromToken(token){
    let decodedUser =  this.jwtHelper.decodeToken(token);
    return decodedUser;
  }

  setCurrentUser(decodedUser){
    this.isLoggedIn = true;
    this.isAdmin = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.email = decodedUser.email;
  }

  logout(){
    localStorage.removeItem('userToken');
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

}
