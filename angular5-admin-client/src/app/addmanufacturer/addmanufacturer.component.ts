import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmanufacturer',
  templateUrl: './addmanufacturer.component.html',
  styleUrls: ['./addmanufacturer.component.css']
})
export class AddmanufacturerComponent implements OnInit {
  mftrFormData:FormGroup;

  constructor(
    private fb:FormBuilder
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

}
