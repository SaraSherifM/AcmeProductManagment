import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
 
  imports: [
    RouterModule.forChild([
      
      {path: 'products', component: ProductListComponent},
      {
        path: 'product/:id',
       canActivate:[ProductDetailGuard],
       component: ProductDetailsComponent
      }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent, 
    ProductDetailsComponent,
],
})
export class ProductModule { }
