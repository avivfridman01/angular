import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-admin-remove-customer',
  templateUrl: './admin-remove-customer.component.html',
  styleUrls: ['./admin-remove-customer.component.css']
})
export class AdminRemoveCustomerComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  form: FormGroup
  id: number;

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ])
    })
  }

  click(): void {
    const observable = this.adminService.removeCustomer(this.id);
    observable.subscribe(value => {
      alert("customer " + value.custName + " removed");
      console.log(value);
      this.id = undefined;
    }, error => {
      alert(error.error.message);
      console.log(error);
    }
    )
  }
}
