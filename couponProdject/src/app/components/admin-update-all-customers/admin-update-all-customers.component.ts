import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-admin-update-all-customers',
  templateUrl: './admin-update-all-customers.component.html',
  styleUrls: ['./admin-update-all-customers.component.css']
})
export class AdminUpdateAllCustomersComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  customers: Customer[];
  ngOnInit() {
    const observable = this.adminService.getAllCustomers();
    observable.subscribe(value => {
      this.customers = value;
    }, error => {
      alert(error.error.message);
      console.log(error);
    })
  }

}
