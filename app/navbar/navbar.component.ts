import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
  
})
export class NavbarComponent {
  user: any;
  username: any;
  constructor(private bs: Router,public cart:CartService) { }
  ngOnInit() {
    if (localStorage.getItem("Loginuser") == null) {
      this.bs.navigateByUrl("/")
    }
    else {
      this.user = localStorage.getItem("Loginuser")
      this.user = JSON.parse(this.user);
      this.username = this.user.username;
    }

  }

  logoutcheck() {
    localStorage.removeItem("Loginuser")
    this.bs.navigateByUrl("/")
  }


}
