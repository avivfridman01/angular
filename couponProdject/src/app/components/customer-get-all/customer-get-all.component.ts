import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-get-all',
  templateUrl: './customer-get-all.component.html',
  styleUrls: ['./customer-get-all.component.css']
})
export class CustomerGetAllComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  coupons: Coupon[];

  ngOnInit() {
    const observable = this.customerService.getAll();
    observable.subscribe(value => {
      this.coupons = value;
      console.log(value);
    }, error => {
      alert(error.error.message);
      console.log(error);
    });
  }

}
