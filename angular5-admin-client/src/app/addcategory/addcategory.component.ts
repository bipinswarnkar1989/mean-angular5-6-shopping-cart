import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Category } from '../models/category.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit ,OnChanges {
  catgrFormGeneral:FormGroup;
  catgrFormData:FormGroup;

  constructor(
    private fb:FormBuilder
  ){
    this.createForm();
   }

  createForm(){
    this.catgrFormGeneral = this.fb.group({
      name:['', Validators.required],
      desciption:'',
      meta_title:['', Validators.required],
      meta_description:'',
      meta_keyword:''
    });
    this.catgrFormData = this.fb.group({
      parent:''
    })
  }

  ngOnInit() {
  }

  ngOnChanges(){

  }

}
