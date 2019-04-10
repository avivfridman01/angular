import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-company-get',
  templateUrl: './company-get.component.html',
  styleUrls: ['./company-get.component.css']
})
export class CompanyGetComponent  implements OnInit{
  constructor(private companyService:CompanyService){}
  
  
  form:FormGroup;
  id:number;
  coupon:Coupon = new Coupon();
  done:boolean = false;
  
  
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl (null, [
        Validators.required
      ])
    })
  };
  
  
  click():void{
    const observable = this.companyService.getCoupon(this.id);
    observable.subscribe(value=>{
      this.coupon=value;
      this.id=undefined;
      this.done=true;
    }, error=>{
      alert(error.error.message);
      this.done=false;
      console.log(error);
    })
  }
}
