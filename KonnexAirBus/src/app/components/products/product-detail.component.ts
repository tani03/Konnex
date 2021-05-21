import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string='Product Details';
  product:IProduct;
  errorMessage: string=" ";

  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`:${id}`;
    this.product=this.getProduct(id);
    
  }
  getProduct(id: number): IProduct {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
      });

      return this.product;
  }
 

  onBack():void{
    this.router.navigate(['/products']);
  }

}
