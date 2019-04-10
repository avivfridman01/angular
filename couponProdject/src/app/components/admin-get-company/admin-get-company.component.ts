import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-admin-get-company',
  templateUrl: './admin-get-company.component.html',
  styleUrls: ['./admin-get-company.component.css']
})
export class AdminGetCompanyComponent implements OnInit {


  constructor(private adminService: AdminService) { }
  form: FormGroup
  done: boolean = false;
  id: number;
  company: Company = new Company();

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ])
    })
  }
  click(): void {
    const observable = this.adminService.getCompany(this.id);
    observable.subscribe(value => {
      this.company = value;
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
