import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { DashComponent } from '../dash/dash.component';
import { LoggedInGuardService } from '../services/logged-in-guard.service';
import { CategoriesComponent } from '../categories/categories.component';
import { AddcategoryComponent } from '../addcategory/addcategory.component';
import { ManufacturersComponent } from '../manufacturers/manufacturers.component';
import { AddmanufacturerComponent } from '../addmanufacturer/addmanufacturer.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { ProductsComponent } from '../products/products.component';

const appRoutes:Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'dash', component:DashComponent },
  { path:'categories/:page/:limit', component:CategoriesComponent },
  { path: 'category/add', component:AddcategoryComponent },
  { path: 'manufacturers/:page/:limit', component:ManufacturersComponent },
  { path: 'manufacturer/add', component:AddmanufacturerComponent },
  { path: 'category/edit/:id', component:EditCategoryComponent },
  { path: 'products/:page/:limit', component:ProductsComponent }
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
