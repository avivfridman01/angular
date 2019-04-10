import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-customer-get-all-price',
  templateUrl: './customer-get-all-price.component.html',
  styleUrls: ['./customer-get-all-price.component.css']
})
export class CustomerGetAllPriceComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  form: FormGroup;
  price: number;
  done: boolean = false;
  coupons: Coupon[];

  ngOnInit() {
    this.form = new FormGroup({
      price: new FormControl(null, [
        Validators.required
      ])
    })
  };

  click() {
    const observable = this.customerService.getAllByPrice(this.price);
    observable.subscribe(value => {
      this.coupons = value;
      this.done = true;
      console.log(value);
      this.price = undefined;
    }, error => {
      alert(error.error.message);
      console.log(error);
      this.done = false;
    });
  }
}

