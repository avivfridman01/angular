import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-admin-remove-company',
  templateUrl: './admin-remove-company.component.html',
  styleUrls: ['./admin-remove-company.component.css']
})
export class AdminRemoveCompanyComponent implements OnInit {
  form: FormGroup
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ])
    })
  }
  id: number;
  click() {
    const observable = this.adminService.removeCompany(this.id);
    observable.subscribe(value => {
      alert("company " +value.compName+ " removed");
      console.log(value);
      this.id = undefined;
    }, error => {
      alert(error.error.message);
      console.log(error);
    })
  }
}
