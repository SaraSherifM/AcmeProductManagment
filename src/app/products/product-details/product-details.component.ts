import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private router:Router,
    private service:ProductService) { }

  pageTitle:string ='Product Detail';
  product:IProduct;

  ngOnInit(): void {
    //we use snapshot approach if we dont expect url to change
    //a + to convert string to numeric
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      const id = +param;
      this.getProduct(id);
      this.pageTitle += ` ${id}`;
    }
    
    

    
  }

  getProduct(id: number){
    this.service.getProductById(id).subscribe(
      // product => this.product = product
      {
        next: product => this.product = product,
        error: err => console.log(err)  
      }
    )
  }

  onBack() :void{
      this.router.navigate(['/products']);
  }

}
