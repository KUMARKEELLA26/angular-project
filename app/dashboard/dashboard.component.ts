import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private bs: Router) { }

  logoutcheck() {
    localStorage.removeItem("logout")
    this.bs.navigateByUrl("/")
  }
}
