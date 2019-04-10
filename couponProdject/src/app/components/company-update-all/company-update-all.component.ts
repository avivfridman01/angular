import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-company-update-all',
  templateUrl: './company-update-all.component.html',
  styleUrls: ['./company-update-all.component.css']
})
export class CompanyUpdateAllComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  coupons: Coupon[];

  ngOnInit() {
    const observable = this.companyService.getAll();
    observable.subscribe(value => {
      this.coupons = value;
      console.log(value);
    }, error => {
      alert(error.error.message);
      console.log(error);
    });
  }

}
