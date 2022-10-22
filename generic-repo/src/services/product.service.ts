import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/models/product';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private _httpClient: HttpClient) { }
  

  getAllProducts() {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.get<Product>(`${environment.productUrl}GetAllProducts`, httpOptions);
  }

  createProduct(product: Product) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.post<Product>(`${environment.productUrl}CreateProduct`, product, httpOptions);
  }

  updateProduct(product: Product) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.put<Product>(`${environment.productUrl}UpdateProduct`, product, httpOptions);
  }


  deleteProduct(productId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.delete(`${environment.productUrl}DeleteProduct/${productId}`, httpOptions);
  }
  
}