import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-nested-array',
  templateUrl: './nested-array.component.html',
  styleUrls: ['./nested-array.component.scss']
})
export class NestedArrayComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      stores: this.fb.array([])
    })
  }

  addStore() {
    (<FormArray>this.myForm.get('stores')).push(this.fb.group({
      storeName: ['', Validators.required],
      orders: this.fb.array([])
    }));
    console.log('A store has been added.');
  }

  removeStore(i: number) {
    (<FormArray>this.myForm.get('stores')).removeAt(i);
    console.log('A store has been removed.');
  }

  addOrder(fa: AbstractControl) {
    (<FormArray>fa).push(this.fb.group({
      item: ['', Validators.required],
      price: [null, Validators.required]
    }));
    console.log('An order has been added.');
  }

  removeOrder(fa: AbstractControl, i: number) {
    (<FormArray>fa).removeAt(i);
    console.log('An order has been removed.');
  }

  onSubmit() {
    console.log(this.myForm.value);
    console.log('Form submitted.');
  }

}
