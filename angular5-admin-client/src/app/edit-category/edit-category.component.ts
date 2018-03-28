import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditCategoryComponent>,
  ) { }

  ngOnInit() {
  }

}
