import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClassComponent } from './form-class/form-class.component';
import { FormsComponent } from './forms.component';
import { NestedArrayComponent } from './nested-array/nested-array.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'nested-array', component: NestedArrayComponent },
  { path: 'form-class', component: FormClassComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
