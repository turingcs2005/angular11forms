import { Component, OnInit } from '@angular/core';
import { formObj } from './models';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.scss']
})
export class FormClassComponent implements OnInit {

  formObj = formObj;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formObj.myForm.value);
    console.log('Form submitted!');
  }

}
