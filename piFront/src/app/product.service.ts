import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get(`${this.API_URL}/all-product`)
  }

  addProduct(product: any) {
    return this.httpClient.post(`${this.API_URL}/add-product`, product)
  }

  editProduct(product: any) {
    return this.httpClient.put(`${this.API_URL}/edit-product`, product)
  }

  deleteProduct(idProduct: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-product${idProduct}`)
  }

}
