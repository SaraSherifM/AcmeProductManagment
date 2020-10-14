import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';




@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  
pageTitle:string ='Product List';
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean = false;
_listFilter:string;
errorMessage:string;

get listFilter():string{
  return this._listFilter;

};

set listFilter(value:string){
  this._listFilter = value;
  this.fliteredProducts = this._listFilter? this.performFilter(this._listFilter) :this.products;
};

fliteredProducts: IProduct[] = [];
products: IProduct[] = [];

  constructor(private productService:ProductService){
    this.fliteredProducts = this.products;
    // this.listFilter = 'cart';
  }

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product) => 
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
  }


  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List' + message;

  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe({
      next: products => {

        this.products = products;
        this.fliteredProducts = this.products;

      },
      error: err => this.errorMessage = err
    });

  }
}