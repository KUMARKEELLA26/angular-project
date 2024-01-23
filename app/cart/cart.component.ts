import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { of } from 'rxjs';
import { product } from '../product';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'

})
export class CartComponent {
  cartarr: product[] = [];
  obj: any;
  totalPrice: any = 0;

  constructor(private service: CartService, private condi: Router) { }

  calc() {

    for (this.obj of this.cartarr) {
      this.totalPrice += parseInt(this.obj.productPrice)

    }
  }
  ngOnInit() {
    this.service.getitemsincart().subscribe((res) => {
      this.cartarr = res;
    })
    console.log(this.cartarr

    )

    this.calc();

  }

  length() {

  }



  orderplaced() {
    if (this.totalPrice == 0) {
      // this.condi.navigateByUrl("/")

      Swal.fire({
        title: `please add the Product to cart first `,
        icon: 'error'
      })

    }


    else if (this.totalPrice != 0) {

      Swal.fire({
        title: `Order Placed <br> Congratulations`,
        icon: 'success'
      })
    }

  }



  removeitem(u:any){
  // let index= this.cartarr.findIndex((res)=>{
  //   if(u.productId==res.productId){
  //     return u.productId;
  //   }
  //  })
  //  this.cartarr.splice(index,1)
   this.totalPrice -= parseInt(u.productPrice)
   this.service.removeitem(u);

  }

}
