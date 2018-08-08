import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  apiUrl = 'http://localhost:3001/api/product';
  token = localStorage.getItem('userToken') || null;
  httpHeaders:HttpHeaders = new HttpHeaders();
  constructor(
    private http:HttpClient
  ) { }

  getProducts(params):Observable<any>{
    return this.http.get(`${this.apiUrl}/${params.page}/${params.limit}`, {
      headers:this.httpHeaders.set('authorization', this.token)
    })
  }

  deleteProduct(p){
    return this.http.delete(`${this.apiUrl}/${p._id}`, {
      headers:this.httpHeaders.set('authorization', this.token)
    });
  }

}
