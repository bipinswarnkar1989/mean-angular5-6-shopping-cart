import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email:['', [Validators.email,Validators.email,Validators.minLength(3)]],
      password:['', Validators.required]
    });
  }

  login(){
    this.auth.login(this.loginForm.value).subscribe(res => {
        if(res.success){
          this.auth.useToken(res.token);
          this.router.navigate(['/dash']);
        }
        else if(!res.success && res.message){
          alert(res.message)
        }
       else{
         alert('Something went wrong!');
       }
    },
    err => {
        console.log('Something went wrong!');
      })
  }

  getErrorMessage(){
    // return this.loginForm.controls('password').hasError('required') ? 'You must enter a value' :
    //        this.loginForm.controls('email').hasError('email') ? 'Not a valid email': '' ;
  }

}
