import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-get-by-type',
  templateUrl: './company-get-by-type.component.html',
  styleUrls: ['./company-get-by-type.component.css']
})
export class CompanyGetByTypeComponent implements OnInit {
  constructor(private companyService: CompanyService) { }

  form: FormGroup;
  couponType: string;
  coupons: Coupon[];
  done: boolean = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(null, [
        Validators.required
      ])
    })
  };

  click() {
    const observable = this.companyService.getByType(this.couponType);
    observable.subscribe(value => {
      this.coupons = value;
      this.done = true;
      console.log(value);
      this.couponType = undefined;
    }, error => {
      alert(error.error.message);
      console.log(error);
      this.done = false;
    });
  }
}
