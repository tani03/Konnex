import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
    providedIn:'root'
})
export class ProductService{

    private productUrl='api/products/products.json';

    constructor(private http:HttpClient){}

    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data=>console.log('All'+JSON.stringify(data))),
              catchError(this.handleError)
        );
    }

    getProduct(id:number):Observable<IProduct>{
      return this.getProducts().pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
    }
  private handleError(handleError: HttpErrorResponse) {
    let errorMessage='';
    if(handleError.error instanceof ErrorEvent){
      errorMessage=`An error occured: ${handleError.error.message}`;
    
    }else{
        errorMessage=`Server returned code: ${handleError.status} , error message is: ${handleError.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}