import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import { ManufacturerService } from '../services/manufacturer.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-editmanufacturer',
  templateUrl: './editmanufacturer.component.html',
  styleUrls: ['./editmanufacturer.component.css']
})
export class EditmanufacturerComponent implements OnInit {
  mftrFormData:FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private mftr:ManufacturerService,
    private shared:SharedService
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.mftrFormData = this.fb.group({
      name:[this.data.name, Validators.required],
      seo:'',
      sort_order:this.data.sort_order,
      _id:this.data._id
    });
  }

  clearInput(n){
    let id = <HTMLInputElement>document.getElementById(n);
     id.value = '';
    return;
  }

  editMftr(){
    const data = new FormData();
    let f = <HTMLInputElement>document.getElementById('editmftr_data_file');
    let file = f && f.value !== '' ? f.files[0] : null;
    let mftrFormObj = this.mftrFormData.value;
    let mftrFormStatus = this.mftrFormData.status;
    for (let property in mftrFormObj) {
      data.append(property, mftrFormObj[property]);
    }
    if(file && file.name !== '' && file.name !== undefined){
      data.append('image',file);
    }
    if (mftrFormStatus === "VALID") {
      this.mftr.updateMftr(data).subscribe(
        resp => {
          //this.shared.isLoading = false;
          f.value = '';
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
      )
    }
  }

}
