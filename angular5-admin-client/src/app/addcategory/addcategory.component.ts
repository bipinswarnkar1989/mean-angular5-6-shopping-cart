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
  showGeneral:boolean = true;

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
    let f = <HTMLInputElement>document.getElementById('catgr_data_file');
    let file = f && f.value !== '' ? f.files[0] : null;
    let gDataObj = this.catgrFormGeneral.value;
    let gformStatus = this.catgrFormGeneral.status;
    for(let property in gDataObj){
      data.append(property, gDataObj[property]);
    }
    if(file && file.name !== '' && file.name !== undefined){
      data.append('image',file);
    }
   if(gformStatus === "VALID"){
     this.ctrgService.addCategory(data).subscribe(
       resp => {
         this.shared.isLoading = false;
         this.catgrFormGeneral.reset();
         this.catgrFormData.reset();
         f.value = "";
         if(resp.status){
           this.shared.openSnackBar(resp.message, 'Ok');
         }else if(!resp.status && resp.message){
            this.shared.openSnackBar(resp.message, 'Ok');
         }
       },
       error =>{
         alert(error.message);
         console.log(error);
       }
   );
 }else{
   this.shared.openSnackBar('Please fill all required fields','Ok');
   this.shared.isLoading = false;
 }
  }

  toogleTabContent(b:boolean){
    this.showGeneral = b;
  }

  clearInput(n){
    let id = <HTMLInputElement>document.getElementById(n);
     id.value = '';
    return;
  }

}
