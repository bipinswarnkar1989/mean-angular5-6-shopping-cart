import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  isLoggedIn:boolean = false;
  isAdmin:boolean = false;
  userApiUrl:String = 'http://localhost:3001/api/user';
  jwtHelper: JwtHelper = new JwtHelper();
  currentUser:User = new User();
  httpHeaders:HttpHeaders = new HttpHeaders();
  token:any = localStorage.getItem('userToken') || null;
  constructor(
    private http:HttpClient,
    private router:Router,
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
    this.router.navigate(['/login']);
  }

  validateToken():Observable<boolean>{
    let token = localStorage.getItem('userToken');
      return this.http.get<any>(`${this.userApiUrl}/validateToken`,{
        headers:this.httpHeaders.set('authorization', token),
      });

  }

  setTokenAfterValidation(){
    let token = localStorage.getItem('userToken');
    let user = this.decodeUserfromToken(token);
    this.setCurrentUser(user);
  }

  checkAuthentication(){
    if(this.token){
      this.validateToken().subscribe(res => {
        if(res) {
          this.setTokenAfterValidation();
          return res;
        }
        else{
          return false
        }
      })
    }else{
      return false;
    }
  }

}
