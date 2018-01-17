import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
  apiUrl:String = 'http://localhost:3001/api/category';
  httpHeaders:HttpHeaders = new HttpHeaders();
  token = localStorage.getItem('userToken') || null;

  constructor(
    private http:HttpClient
  ) { }

  getCategories(p):Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiUrl}/category/${p.page}/${p.limit}`,{
      headers:this.httpHeaders.set('authorization', this.token)
    })
  }
}
