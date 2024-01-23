import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private bs: Router) { }
  uname: any;
  pwd: any;
  user: any;
  Logincheck() {
    if (this.uname == "admin" && this.pwd == "admin123") {

      
      this.bs.navigateByUrl("/admin/home")
      Swal.fire(
        {
          title: `hello  ${this.uname} <br> login success`,
          icon:'success'
        })
      this.user = {
        "username": this.uname,
        "password": this.pwd,
      }
      localStorage.setItem("Loginuser", JSON.stringify(this.user));
    }
    else if (this.uname != null && this.pwd=="12345") {
      Swal.fire(
        {
          title: `hello  ${this.uname} <br> login success`,
          icon:'success'
        })
      this.bs.navigateByUrl("/nav/home")
      this.user = {
        "username": this.uname,
        "password": this.pwd,
      }





      localStorage.setItem("Loginuser", JSON.stringify(this.user));
    }
    else {
      alert("username/password is incorrect")
    }
  }
}


