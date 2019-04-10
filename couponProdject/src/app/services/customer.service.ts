import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  BASE_URL: String = "http://localhost:8080/couponSystemPart2/rest/sec/serviceCustomer";
  constructor(private http: HttpClient) { }

  public purchase(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/purchaseCoupon/${id}`, { withCredentials: true });
  }
  public getAll(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/getAllPurchasedCoupons`, { withCredentials: true });
  }
  public getAllByType(couponType: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/getAllPurchasedCouponsByType/${couponType}`, { withCredentials: true });
  }
  public getAllByPrice(price: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/getAllPurchasedCouponsByPrice/${price}`, { withCredentials: true });
  }
  public getAllCouponsInStore(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/getAllCouponsInStore`, { withCredentials: true });
  }


}
