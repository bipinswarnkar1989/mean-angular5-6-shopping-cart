import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ServicesModule } from './services/services.module';
import { DashComponent } from './dash/dash.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { AddmanufacturerComponent } from './addmanufacturer/addmanufacturer.component';
import { EditmanufacturerComponent } from './editmanufacturer/editmanufacturer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    CategoriesComponent,
    AddcategoryComponent,
    ManufacturersComponent,
    AddmanufacturerComponent,
    EditmanufacturerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServicesModule,
    HttpClientModule,

  ],
  entryComponents: [EditmanufacturerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
