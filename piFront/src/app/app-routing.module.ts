import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes =[
  { path: 'home',  component: ProductComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
 /* declarations: [],
  imports: [
    CommonModule
  ]*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
