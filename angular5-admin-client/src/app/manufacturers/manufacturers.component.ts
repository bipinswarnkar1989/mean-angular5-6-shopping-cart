import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {
  searchManftrField:FormControl;

  constructor() { }

  ngOnInit() {
    this.searchManftrField = new FormControl();
  }

}
