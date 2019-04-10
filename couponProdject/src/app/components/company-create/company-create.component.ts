import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  constructor(private companyService: CompanyService) { }
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ]),
      title: new FormControl(null, [
        Validators.required
      ]),
      start: new FormControl(null, [
        Validators.required
      ]),
      final: new FormControl(null, [
        Validators.required
      ]),
      amount: new FormControl(null, [
        Validators.required
      ]),
      type: new FormControl(null, [
        Validators.required
      ]),
      message: new FormControl(null, [
        Validators.required
      ]),
      price: new FormControl(null, [
        Validators.required
      ]),
      image: new FormControl(null, [
        Validators.required
      ])
    })
  }

  coupon: Coupon = new Coupon();
  click(): void {
    const observable = this.companyService.createCoupon(this.coupon);
    observable.subscribe(value => {
      alert("coupon " + value.title + " created");
      console.log(value);
      this.coupon = new Coupon();
    }, error => {
      alert(error.error.message);
      console.log(error);
    });
  }
}
  // uploadImage(event): void {
  //   let formData = new FormData(); 
  //   let fileToUpload = event.target.files[0];
  //   formData.append("file", fileToUpload,fileToUpload.name); 
  //   let observable = this.companyService.saveImage(formData);
  //   observable.subscribe(() => {
  //     alert("done");
  //   }, response => {
  //     console.log(response);
  //   })
  //option 2:
  // let file = event.target.files[0];
  // let observable = this.companyService.saveImage(file);
  // observable.subscribe((fileName) => {
  //   this.coupon.image = fileName;
  //   alert("done");
  // }, response => {
  //   console.log(response);
  // })


