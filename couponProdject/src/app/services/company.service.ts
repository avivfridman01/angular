import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/coupon';
import { Observable } from 'rxjs';

/* do i need that response type? responseType: 'text' as 'json'*/

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) { }
  BASE_URL: String = "http://localhost:8080/couponSystemPart2/rest/sec/serviceCompany";

  public createCoupon(coupon: Coupon): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/createCoupon`, coupon, { withCredentials: true });
  }

  public removeCoupon(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/removeCoupon/${id}`, { withCredentials: true });
  }

  public updateCoupon(coupon: Coupon): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/updateCoupon`, coupon, { withCredentials: true });
  }

  public getCoupon(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/getCoupon/${id}`, { withCredentials: true });
  }

  public getAll(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.BASE_URL}/getAllCoupons`, { withCredentials: true }) as Observable<Coupon[]>;
  }

  public getByType(couponType: string): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.BASE_URL}/getCouponsByType/${couponType}`, { withCredentials: true }) as Observable<Coupon[]>;
  }

  public getByPrice(price: number): Observable<Coupon[]> {
    return this.http.get(`${this.BASE_URL}/getCouponsByPrice/${price}`, { withCredentials: true }) as Observable<Coupon[]>;
  }

  public getByDate(endDate: String): Observable<Coupon[]> {
    return this.http.get(`${this.BASE_URL}/getCouponsUntilDate/${endDate}`, { withCredentials: true }) as Observable<Coupon[]>;
  }

  // public saveImage(file): Observable<null> {
  //   console.log(file);
  //   return this.http.post<null>(`http://localhost:8080/couponSystemPart2/rest/image`, file,
  //     { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } });
  // }
}