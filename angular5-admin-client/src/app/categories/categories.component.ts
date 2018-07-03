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
  catgrToDelete:{} ;
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
     this.catgrToDelete = c;
  }


  closeAskDeleteAlert(){
    this.showDeleteAlert = false;
  }

  deleteCategory(c){
    this.shared.isLoading = true;
    let id = c._id;
    this.ctgrService.deleteCategory(id).subscribe(
      resp => {
        this.showDeleteAlert = false;
        this.shared.isLoading = false;
        if(resp.success){
          this.categories = this.categories.filter(c => c._id !== resp.catgr._id);
          this.dataSource = new MatTableDataSource<Category>(this.categories);
          this.shared.openSnackBar(resp.message, 'Ok');
        }else if(!resp.success && resp.message){
           this.shared.openSnackBar(resp.message, 'Ok');
        } 
      },
      error => {
        alert(error.message);
      }
    )
  }

  deleteMultiple(){
    this.shared.isLoading = true;
    let selectedIds = this.selection.selected.map(c => c._id); 
    alert(JSON.stringify(selectedIds));

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

