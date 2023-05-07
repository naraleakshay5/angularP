import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommanService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get('https://dummyjson.com/products/categories');
  }
  getCategoriesName(Category: any) {
    return this.http.get(`https://dummyjson.com/products/category/${Category}`);
  }
  getProductDetails(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
