import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { DashComponent } from '../dash/dash.component';
import { LoggedInGuardService } from '../services/logged-in-guard.service';
import { CategoriesComponent } from '../categories/categories.component';

const appRoutes:Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'dash', component:DashComponent },
  { path:'categories', component:CategoriesComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
       { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
