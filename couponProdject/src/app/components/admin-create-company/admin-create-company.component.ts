import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-create-company',
  templateUrl: './admin-create-company.component.html',
  styleUrls: ['./admin-create-company.component.css']
})
export class AdminCreateCompanyComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ]),
      compName: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required
      ])
    })
  }

  company: Company = new Company();
  click(): void {
    const observable = this.adminService.createCompany(this.company);
    observable.subscribe(value => {
      alert("company " + value.compName + " created");
      console.log(value);
      this.company = new Company();
    }, error => {
      alert(error.error.message);
      console.log(error);
    }
    )
  }
}
