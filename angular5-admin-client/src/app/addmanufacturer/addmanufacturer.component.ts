import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { ManufacturerService } from '../services/manufacturer.service';
@Component({
  selector: 'app-addmanufacturer',
  templateUrl: './addmanufacturer.component.html',
  styleUrls: ['./addmanufacturer.component.css']
})
export class AddmanufacturerComponent implements OnInit {
  mftrFormData:FormGroup;

  constructor(
    private fb:FormBuilder,
    private shared:SharedService,
    private mftr:ManufacturerService
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.mftrFormData = this.fb.group({
      name:['', Validators.required],
      seo:'',
      sort_order:''
    });
  }

  clearInput(n){
    let id = <HTMLInputElement>document.getElementById(n);
     id.value = '';
    return;
  }

  saveMftr(){
    this.shared.isLoading = true;
    const data = new FormData();
    let f = <HTMLInputElement>document.getElementById('addmftr_data_file');
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
      this.mftr.addMftr(data).subscribe(
        resp => {
          this.shared.isLoading = false;
          this.mftrFormData.reset();
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
