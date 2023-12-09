import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private _http:HttpClient) { }

  getdata(): Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
