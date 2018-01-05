import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  isLoggedIn:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage(){
    return this.email.hasError('required') ? 'You must enter a value' :
           this.email.hasError('email') ? 'Not a valid email': '' ;
  }

}
