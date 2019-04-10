import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-customer-get-all-type',
  templateUrl: './customer-get-all-type.component.html',
  styleUrls: ['./customer-get-all-type.component.css']
})
export class CustomerGetAllTypeComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

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
    const observable = this.customerService.getAllByType(this.couponType);
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
