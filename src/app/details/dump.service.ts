import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DumpService {
  constructor(private http: HttpClient) {}
  allGet() {
    return this.http.get('https://dummyjson.com/posts');
  }
}
