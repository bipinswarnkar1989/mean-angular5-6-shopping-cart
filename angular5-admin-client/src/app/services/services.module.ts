import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { LoggedInGuardService } from './logged-in-guard.service';
import { CategoryService } from './category.service';
import { SharedService } from './shared.service';
import { ManufacturerService } from './manufacturer.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    LoggedInGuardService,
    CategoryService,
    SharedService,
    ManufacturerService
  ],
  declarations: []
})
export class ServicesModule { }
