import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-company-remove',
  templateUrl: './company-remove.component.html',
  styleUrls: ['./company-remove.component.css']
})
export class CompanyRemoveComponent  implements OnInit{
  constructor(private companyService: CompanyService){}
  
  form: FormGroup;
  id:number;
  
  ngOnInit(): void {
    this.form= new FormGroup({
      id: new FormControl(null,[
        Validators.required
      ])
    })
  };

  click():void{
    const observable = this.companyService.removeCoupon(this.id);
    observable.subscribe(value => {
      console.log(value);
      alert("coupon " + value.title + " removed");
      this.id=undefined;
    },error=> {
      alert(error.error.message);
      console.log(error);
    });
  }
}
