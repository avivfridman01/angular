import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-get-customer',
  templateUrl: './admin-get-customer.component.html',
  styleUrls: ['./admin-get-customer.component.css']
})
export class AdminGetCustomerComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  form: FormGroup
  done: boolean = false;
  id: number;
  customer: Customer = new Customer();

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ])
    })
  }
  click(): void {
    const observable = this.adminService.getCustomer(this.id);
    observable.subscribe(value => {
      this.customer = value;
      this.done = true;
      this.id = undefined;
    }, error => {
      alert(error.error.message);
      this.done = false;
      console.log(error);
    }
    )
  }
}