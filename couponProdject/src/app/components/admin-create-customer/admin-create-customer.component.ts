import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-admin-create-customer',
  templateUrl: './admin-create-customer.component.html',
  styleUrls: ['./admin-create-customer.component.css']
})
export class AdminCreateCustomerComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ]),
      custName: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  customer: Customer = new Customer();
  click(): void {
    const observable = this.adminService.createCustomer(this.customer);
    observable.subscribe(value => {
      alert("customer " + value.custName + " created");
      console.log(value);
      this.customer = new Customer();
    }, error => {
      alert(error.error.message);
      console.log(error);
    }
    )
  }
}

