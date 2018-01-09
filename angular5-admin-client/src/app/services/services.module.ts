import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { LoggedInGuardService } from '../services/logged-in-guard.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    LoggedInGuardService
  ],
  declarations: []
})
export class ServicesModule { }
