import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import {MatTableDataSource, MatDialog} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../models/manufacturer.model';
import { SharedService } from '../services/shared.service';
import { EditmanufacturerComponent } from '../editmanufacturer/editmanufacturer.component';

import 'rxjs/operator/debounceTime';
import 'rxjs/operator/distinctUntilChanged';
import 'rxjs/operator/switchMap';
import 'rxjs/operator/do';

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
  loading:Boolean = false;

  displayedColumns = ['select', 'id', 'name', 'sort_order','edit'];
  dataSource = new MatTableDataSource<Manufacturer>(this.manufacturers);
  selection = new SelectionModel<Manufacturer>(true, []);

  constructor(
    private mftrService:ManufacturerService,
    private route:ActivatedRoute,
    private sharedService:SharedService,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
    this.searchManftrField = new FormControl();
    this.route.params.subscribe(params => this.getMftr(params));
    this.searchManftrField.valueChanges
                  .debounceTime(400)
                  .do(() => this.loading = true)
                  .switchMap(term => {
                    if (term.length > 0) {
                      this.sharedService.isLoading = true;
                      return this.mftrService.srch(term);
                    }else{
                      return this.mftrService.getMftr(this.routeParams);
                    }
                  })
                  .do(() => {
                    this.loading = false;
                    this.sharedService.isLoading = false;
                  })
                  .subscribe(
                    data => {
                      this.manufacturers = data['mftrs'];
                      this.dataSource = new MatTableDataSource<Manufacturer>(this.manufacturers);
                    },
                    error => console.log(error)
                  )
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



openEditDialog(mftr) {
  const dialogRef = this.dialog.open(EditmanufacturerComponent, {
    data:mftr,
    height: '350px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
