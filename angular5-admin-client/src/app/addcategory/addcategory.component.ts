import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Category } from '../models/category.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit ,OnChanges {
  catgrFormGeneral:FormGroup;
  catgrFormData:FormGroup;
  isLoading:boolean = false;

  constructor(
    private fb:FormBuilder,
    private ctrgService:CategoryService,
    private shared:SharedService
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
    this.shared.isLoading = true;
    const data = new FormData();
    let file = document.getElementById('catgr_data_file').files[0];
    let obj = this.catgrFormGeneral.value;
    for(let property in obj){
      data.append(property, obj[property]);
    }
   this.ctrgService.addCategory(data).subscribe(
     resp => {
       this.shared.isLoading = false;
       if(resp.status){
         alert(resp.message);
       }else if(!resp.status && resp.message){
          alert(resp.message);
       }
     },
     error =>{
       alert(error.message);
       console.log(error);
     }
 );
  }

}
