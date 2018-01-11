import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router ,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedInGuardService implements CanActivate {

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  canActivate(){
    console.log('LoggedInGuardService Working');
    return this.auth.isLoggedIn;
  }

}
