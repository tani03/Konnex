import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './product.service';



@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

 

  
  pageTitle:string='Announcements';

 
  products:IProduct[];
  errorMessage: string;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] = [];

  

    constructor(private ProductService:ProductService){
      
    }

    ngOnInit(): void {
      this.ProductService.getProducts().subscribe({
        next: products=>
        {
          this.products=products,
          this.filteredProducts = this.products;
        },
        
        error: err=>this.errorMessage=err

      });
      
    }
   

   

    

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
