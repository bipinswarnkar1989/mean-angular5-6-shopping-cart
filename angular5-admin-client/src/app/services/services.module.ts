import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { LoggedInGuardService } from './logged-in-guard.service';
import { CategoryService } from './category.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    LoggedInGuardService,
    CategoryService
  ],
  declarations: []
})
export class ServicesModule { }
