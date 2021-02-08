import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SharedModule } from '../shared/shared.module';
import { NestedArrayComponent } from './nested-array/nested-array.component';
import { FormClassComponent } from './form-class/form-class.component';


@NgModule({
  declarations: [FormsComponent, NestedArrayComponent, FormClassComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ]
})
export class FormsModule { }
