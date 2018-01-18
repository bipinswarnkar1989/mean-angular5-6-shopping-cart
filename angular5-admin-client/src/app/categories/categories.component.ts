import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Category = new Category();
  categories:Category[] = [];
  displayedColumns = ['select', 'id', 'name', 'desciption'];
  dataSource = new MatTableDataSource<Category>(this.categories);
  selection = new SelectionModel<Category>(true, []);
  searchCatgrField:FormControl;
  loading:boolean = false;
  constructor(
    private auth:AuthService,
    private ctgrService:CategoryService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.getCategory(params));
    this.searchCatgrField = new FormControl();
    this.searchCatgrField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do( () => this.loading = true)
      .switchMap(term => this.searchCatgr(term))
      .do( () => this.loading = false)
      .subscribe(
        data => {
          this.categories = data['catgr'];
          this.dataSource = new MatTableDataSource<Category>(this.categories);
        },
        error => console.log(error)
      );
  }

  getCategory(params){
    this.ctgrService.getCategories(params).subscribe(
      data => {
        this.categories = data['catgr'];
        this.dataSource = new MatTableDataSource<Category>(this.categories);
      },
      error => console.log(error)
    )
  }

  searchCatgr(searchValue: string){
    return this.ctgrService.searchCategory(searchValue);
  }

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }

 /** Whether the number of selected elements matches the total number of rows. */
 isAllSelected() {
   const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.data.length;
   return numSelected === numRows;
 }

 /** Selects all rows if they are not all selected; otherwise clear selection. */
 masterToggle() {
   this.isAllSelected() ?
       this.selection.clear() :
       this.dataSource.data.forEach(row => this.selection.select(row));
 }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
