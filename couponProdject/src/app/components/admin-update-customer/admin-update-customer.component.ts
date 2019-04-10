import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-update-customer',
  templateUrl: './admin-update-customer.component.html',
  styleUrls: ['./admin-update-customer.component.css']
})
export class AdminUpdateCustomerComponent implements OnInit {

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) { }
  form: FormGroup
  customer: Customer = new Customer();

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl(null, [
        Validators.required
      ])
    })
    const id = +this.activatedRoute.snapshot.params.id;
    const observable = this.adminService.getCustomer(id);
    observable.subscribe(value => {
      this.customer = value;
      console.log(this.customer)
    }, error => {
      console.log(error);
      alert(error.error.message);
    })
  }

  click(): void {
    const observable = this.adminService.updateCustomer(this.customer);
    observable.subscribe(value => {
      alert("customer " + value.custName + " updated");
      console.log(value);
      this.customer = new Customer();
    }, error => {
      alert(error.error.message);
      console.log(error);
    }
    )
  }
}

