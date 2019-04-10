import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-company-get-by-price',
  templateUrl: './company-get-by-price.component.html',
  styleUrls: ['./company-get-by-price.component.css']
})
export class CompanyGetByPriceComponent implements OnInit {
  
  constructor(private companyService:CompanyService) { }

form:FormGroup;
price:number;
done:boolean=false;
coupons:Coupon[];

  ngOnInit() {
    this.form = new FormGroup({
      price: new FormControl(null,[
        Validators.required
      ])
    })
  };
  
  click() {
    const observable = this.companyService.getByPrice(this.price);
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
