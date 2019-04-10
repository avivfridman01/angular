import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-admin-update-all-companies',
  templateUrl: './admin-update-all-companies.component.html',
  styleUrls: ['./admin-update-all-companies.component.css']
})
export class AdminUpdateAllCompaniesComponent implements OnInit {
  constructor(private adminService: AdminService) { }
  companies: Company[];

  ngOnInit() {
    const observable = this.adminService.getAllCompanies();
    observable.subscribe(value => {
      this.companies = value;
    }, error => {
      alert(error.error.message);
      console.log(error);
    })
  }
}
