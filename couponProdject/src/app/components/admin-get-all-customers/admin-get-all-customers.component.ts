import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-admin-get-all-customers',
  templateUrl: './admin-get-all-customers.component.html',
  styleUrls: ['./admin-get-all-customers.component.css']
})
export class AdminGetAllCustomersComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  done: boolean = false;
  customers: Customer[];
  ngOnInit() {
    const observable = this.adminService.getAllCustomers();
    observable.subscribe(value => {
      this.customers = value;
      this.done = true;
    }, error => {
      alert(error.error.message);
      this.done = false;
      console.log(error);
    })
  }

}

