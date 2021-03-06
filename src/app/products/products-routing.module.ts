import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'add-product', component: AddproductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
