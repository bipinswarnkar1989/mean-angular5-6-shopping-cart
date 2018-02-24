import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../models/manufacturer.model';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {
  Manufacturer = new Manufacturer();
  searchManftrField:FormControl;
  manufacturers:Manufacturer[] = [];
  routeParams = this.route.params['_value'];

  displayedColumns = ['select', 'id', 'name', 'sort_order'];
  dataSource = new MatTableDataSource<Manufacturer>(this.manufacturers);
  selection = new SelectionModel<Manufacturer>(true, []);

  constructor(
    private mftrService:ManufacturerService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchManftrField = new FormControl();
    this.route.params.subscribe(params => this.getMftr(params));
  }

  getMftr(params):void{
     this.mftrService.getMftr(params)
               .subscribe(
                 data => {
                   this.manufacturers = data['mftrs'];
                   this.dataSource = new MatTableDataSource<Manufacturer>(this.manufacturers);
                 },
                 error => {
                   alert(error);
                   console.log(error);
                 }
               )
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
