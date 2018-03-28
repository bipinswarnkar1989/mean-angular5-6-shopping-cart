import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  catgrFormGeneral:FormGroup;
  catgrFormData:FormGroup;
  isLoading:boolean = false;
  showGeneral:boolean = true;
  routeParams;
  
  constructor(
    private fb:FormBuilder,
    private ctrgService:CategoryService,
    private shared:SharedService,
    private route: ActivatedRoute
  ){
    this.createForm();
    this.routeParams = this.route.params['_value'];
   }

   ngOnInit(){
    //this.shared.isLoading = true;
     this.ctrgService.getCategory(this.routeParams.id)
                     .subscribe(
                       resp => {
                       // this.shared.isLoading = false;
                        this.catgrFormGeneral.setValue({
                          name:resp['catgr'].name ? resp['catgr'].name : '',
                          desciption:resp['catgr'].desciption ? resp['catgr'].desciption : '',
                          meta_title:resp['catgr'].meta_title ? resp['catgr'].meta_title : '',
                          meta_description:resp['catgr'].meta_description ? resp['catgr'].meta_description : '',
                          meta_keyword:resp['catgr'].meta_keyword ? resp['catgr'].meta_keyword : ''
                        });
                        this.catgrFormData.setValue({
                          parent:resp['catgr'].parent ? resp['catgr'].parent : '',
                          status:resp['catgr'].status ? resp['catgr'].status : '',
                        })
                       },
                       error =>{
                        alert(error.message);
                        console.log(error);
                      }
                     )
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
     data.append('id', this.routeParams.id);
     this.ctrgService.editCategory(data).subscribe(
       resp => {
         this.shared.isLoading = false;
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
