import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from 'src/app/models/coupon';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-purchase',
  templateUrl: './customer-purchase.component.html',
  styleUrls: ['./customer-purchase.component.css']
})
export class CustomerPurchaseComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  form:FormGroup;
  coupons: Coupon[];
  id: number;

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ])
    })
    const observable = this.customerService.getAllCouponsInStore();
    observable.subscribe(value => {
      this.coupons = value;
      console.log(value);
    }, error => {
      alert(error.error.message);
      console.log(error);
    })
  }

  click() {
    const observable = this.customerService.purchase(this.id);
    observable.subscribe(value => {
      alert("you bougth coupon " + value.title + " successfully!");
      this.id=undefined;
      console.log(value);
    }, error => {
      alert(error.error.message);
      console.log(error);
    })
  }

}
