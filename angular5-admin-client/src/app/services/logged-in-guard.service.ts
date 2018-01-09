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

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):Observable<boolean> | boolean{
    console.log('LoggedInGuardService Working');
    //this.auth.checkAuthentication();
    if(!this.auth.checkAuthentication()){
     this.router.navigate(['/login']);
    }
    return this.auth.checkAuthentication();
  }

}
