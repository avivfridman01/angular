import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LogginService } from 'src/app/services/loggin.service';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {

  constructor(private router: Router, private logginService: LogginService) { }
  loginObj: Login = new Login();
  
  click(): void {
    let observable =this.logginService.login(this.loginObj);
    observable.subscribe(user => {
      switch (this.loginObj.clientType) {
        case "ADMIN":
        this.router.navigate(["/admin"])
        break;
        case "COMPANY":
        this.router.navigate(["/company"])
        break;
        case "CUSTOMER":
        this.router.navigate(["/customer"])
        break;
        default:
        this.router.navigate(["/"])
        break;
      }
    }, error => {
      alert(error.error.message);
      this.router.navigate(["/"])
    });
  }
}
