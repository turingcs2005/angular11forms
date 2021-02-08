import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  profileForm = this.fb.group({
    name: ['', Validators.required],
    aliases: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.group({
      item: ['', Validators.required],
      price: [null, Validators.required],
      origins: this.fb.array([])
    }));
  }

  removeAlias(i: number) {
    this.aliases.removeAt(i);
  }

  addOrigin(fa: FormArray) {
    fa.push(this.fb.group({
      city: ['', Validators.required],
      country: ['', Validators.required]
    }));
  }

  removeOrigin(fa: AbstractControl, i: number) {
    (<FormArray>fa).removeAt(i);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form submitted.');
  }

  logForm() {
    console.log(this.profileForm.value);
  }

}
