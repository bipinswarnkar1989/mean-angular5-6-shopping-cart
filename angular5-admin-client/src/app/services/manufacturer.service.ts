import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Manufacturer } from '../models/manufacturer.model';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';

@Injectable()
export class ManufacturerService {
  apiUrl:String = 'http://localhost:3001/api/manufacturer';
  httpHeaders:HttpHeaders = new HttpHeaders();
  token = localStorage.getItem('userToken') || null;

  constructor(
    private http:HttpClient
  ) { }
  
  getMftr(p):Observable<Manufacturer[]>{
     return this.http.get<Manufacturer[]>(`${this.apiUrl}/${p.page}/${p.limit}`,{
       headers:this.httpHeaders.set('authorization',this.token)
     })
  }

  srch(q):Observable<Manufacturer[]>{
    return this.http.get<Manufacturer[]>(`${this.apiUrl}/search/${q}`,{
      headers:this.httpHeaders.set('authorization',this.token)
    })
  }

  addMftr(m):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/`, m, {
      headers:this.httpHeaders.set('authorization',this.token)
    })
  }
}
