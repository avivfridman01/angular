import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})

export class LogginService {
  constructor(private http: HttpClient) { }
  BASE_URL: String = "http://localhost:8080/couponSystemPart2/rest/LogginService/login";

  public login(loginObj: Login): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}`, loginObj, { withCredentials: true });
  }
}
