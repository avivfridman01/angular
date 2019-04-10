import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-admin-get-all-companies',
  templateUrl: './admin-get-all-companies.component.html',
  styleUrls: ['./admin-get-all-companies.component.css']
})
export class AdminGetAllCompaniesComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  done: boolean = false;
  companies: Company[];

  ngOnInit() {
    const observable = this.adminService.getAllCompanies();
    observable.subscribe(value => {
      this.companies = value;
      this.done = true;
    }, error => {
      alert(error.error.message);
      console.log(error);
    })
  }
}
