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
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Category = new Category();
  categories:Category[] = [];
  displayedColumns = ['select', 'id', 'name', 'edit','delete'];
  dataSource = new MatTableDataSource<Category>(this.categories);
  selection = new SelectionModel<Category>(true, []);
  searchCatgrField:FormControl;
  loading:boolean = false;
  routeParams = this.route.params['_value'];
  showDeleteAlert:boolean = false;
  catgrToDelete:string = '';
  constructor(
    private auth:AuthService,
    private ctgrService:CategoryService,
    private route:ActivatedRoute,
    private shared:SharedService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.getCategory(params));
    this.searchCatgrField = new FormControl();
    this.searchCatgrField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do( () => this.loading = true)
      .switchMap(term => {
        if(term.length > 0){ return this.searchCatgr(term)}
      else{
         return this.ctgrService.getCategories(this.routeParams);
      }
    }
    )
      .do( () => this.loading = false)
      .subscribe(
        data => {
          this.categories = data['catgr'];
          this.dataSource = new MatTableDataSource<Category>(this.categories);
        },
        error => console.log(error)
      );
  }

  askDeleteCategory(c){
     this.showDeleteAlert = true;
     this.catgrToDelete = c.name;
  }


  closeAskDeleteAlert(){
    this.showDeleteAlert = false;
  }

  deleteCategory(c){
    let id = c._id;
    this.ctgrService.deleteCategory(id).subscribe(
      data => {
          
      }
    )
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

