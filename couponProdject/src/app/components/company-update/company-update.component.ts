import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {
  constructor(private companyService: CompanyService, private activatedRoute: ActivatedRoute) { }
  form: FormGroup
  coupon: Coupon = new Coupon();
  endDate:string;
  price:number;

  ngOnInit(): void {
    this.form = new FormGroup({
      final: new FormControl(null, [
        Validators.required
      ]),
      price: new FormControl(null, [
        Validators.required
      ])
    })
    const id = +this.activatedRoute.snapshot.params.id;
    const observable = this.companyService.getCoupon(id);
    observable.subscribe(value => {
      this.coupon = value;
    }, error => {
      console.log(error);
      alert(error.error.message);
    })
  };

  click(): void {
    this.coupon.endDate=this.endDate;
    this.coupon.price=this.price;
    const observable = this.companyService.updateCoupon(this.coupon);
    observable.subscribe(value => {
      alert("coupon " + value.title + " updated");
      console.log(value);
      this.coupon = new Coupon();
      this.endDate=undefined
      this.price=undefined
    }, error => {
      alert(error.error.message);
      console.log(error);
    })
  }
}