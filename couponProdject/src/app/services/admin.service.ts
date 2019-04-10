import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }
  BASE_URL: String = "http://localhost:8080/couponSystemPart2/rest/sec/serviceAdmin";

  public createCompany(company: Company): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/createCompany`, company, { withCredentials: true });
  }

  public removeCompany(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/deleteCompany/${id}`, { withCredentials: true });
  }

  public updateCompany(company: Company): Observable<any> {
    return this.http.put(`${this.BASE_URL}/updateCompany`, company, { withCredentials: true });
  }

  public getCompany(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/getCompany/${id}`, { withCredentials: true });
  }

  public getAllCompanies(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/getAllCompanies`, { withCredentials: true });
  }

  public createCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${this.BASE_URL}/createCustomer`, customer, { withCredentials: true });
  }

  public removeCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/deleteCustomer/${id}`, { withCredentials: true });
  }

  public updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(`${this.BASE_URL}/updateCustomer`, customer, { withCredentials: true });
  }

  public getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/getCustomer/${id}`, { withCredentials: true });
  }

  public getAllCustomers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/getAllCustomers`, { withCredentials: true });
  }
}