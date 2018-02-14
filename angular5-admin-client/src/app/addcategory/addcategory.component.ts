import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Category } from '../models/category.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit ,OnChanges {
  catgrFormGeneral:FormGroup;
  catgrFormData:FormGroup;


  constructor(
    private fb:FormBuilder,
    private ctrgService:CategoryService
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
      parent:'',
      status:'',
    })
  }

  ngOnInit() {
  }

  ngOnChanges(){

  }

  saveCategory(){
    const data = new FormData();
    let file = document.getElementById('catgr_data_file').files[0];alert(file.name)
    let obj = this.catgrFormGeneral.value;
    for(let property in obj){
      console.log(property+':'+obj[property]);
      data.append(property, obj[property]);
    }
   this.ctrgService.addCategory(data).subscribe(resp => console.log(resp))
  }

}
