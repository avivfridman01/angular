import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-company-get-by-date',
  templateUrl: './company-get-by-date.component.html',
  styleUrls: ['./company-get-by-date.component.css']
})
export class CompanyGetByDateComponent  implements OnInit{
  constructor(private companyService:CompanyService){}
  form:FormGroup
  date: String;
  done:boolean=false;
  coupons:Coupon[];

  ngOnInit(): void {
    this.form=new FormGroup({
      date: new FormControl(null,[
        Validators.required
      ])
    })
  };
  click() {
    const observable = this.companyService.getByDate(this.date);
    observable.subscribe(value => {
      this.coupons = value;
      this.done = true;
      console.log(value);
      this.date = undefined;
    }, error => {
      console.log(error);
      alert(error.error.message);
      this.done = false;
    });
  }
}
