import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-update-company',
  templateUrl: './admin-update-company.component.html',
  styleUrls: ['./admin-update-company.component.css']
})
export class AdminUpdateCompanyComponent implements OnInit {

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) { }
  form: FormGroup
  company: Company = new Company();
  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required
      ])
    })
    const id = +this.activatedRoute.snapshot.params.id;
    const observable = this.adminService.getCompany(id);
    observable.subscribe(value => {
      this.company = value;
    }, error => {
      console.log(error);
      alert(error.error.message);
    })
  }

  click(): void {
    const observable = this.adminService.updateCompany(this.company);
    observable.subscribe(value => {
      alert("company " + value.compName + " updated");
      console.log(value);
      this.company = new Company();
    }, error => {
      alert(error.error.message);
      console.log(error);
    }
    )
  }
}

