import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA,MatDialog, MatDialogRef} from '@angular/material';
import { ManufacturerService } from '../services/manufacturer.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-editmanufacturer',
  templateUrl: './editmanufacturer.component.html',
  styleUrls: ['./editmanufacturer.component.css']
})
export class EditmanufacturerComponent implements OnInit {
  mftrFormData:FormGroup;
  isLoading:Boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private mftr:ManufacturerService,
    private shared:SharedService,
    public dialogRef: MatDialogRef<EditmanufacturerComponent>,
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
    this.isLoading = true;
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
          this.isLoading = false;
          f.value = '';
          if(resp.success){
            this.dialogRef.close(resp.mftr);
            this.shared.openSnackBar(resp.message, 'Ok');
          }else if(!resp.status && resp.message){
             this.shared.openSnackBar(resp.message, 'Ok');
          }
        },
        error =>{
          this.isLoading = false;
          alert(error.message);
          console.log(error);
        }
      )
    }
  }

  cancelUpdate():void {
    this.dialogRef.close();
  }

}
