import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  [x: string]: any;
  constructor(private service: ProductService, private bs: Router) { }
  pId: any;
  pName: any;
  pFeatures: any;
  pCompany: any;
  pImage: any;

  
  newpro: any;

  addproduct() {
    
    this.newpro = {

      productId: this.pId,
      productName: this.pName,
      productCompany: this.pCompany,
      productFeatures: this.pFeatures,
      productImage: this.pImage,

    }
    this.service.addproduct(this.newpro);
    this.bs.navigateByUrl("admin/products");
  }
}
