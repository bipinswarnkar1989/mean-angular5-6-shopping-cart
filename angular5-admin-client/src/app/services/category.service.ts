import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Category } from '../models/category.model';
import 'rxjs/add/operator/map';

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

  searchCategory(q):Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiUrl}/category/search/${q}`,{
      headers:this.httpHeaders.set('authorization', this.token)
    })
  }

  addCategory(c):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/category`, c, {
      headers:this.httpHeaders.set('authorization', this.token)
    })
  }

  getCategory(id):Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiUrl}/category/${id}`,{
      headers:this.httpHeaders.set('authorization',this.token)
    })
  }

  editCategory(c):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/category`, c, {
      headers:this.httpHeaders.set('authorization', this.token)
    })
  }
}
