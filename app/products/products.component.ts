import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  pArray:any;
  CartService: any;
  constructor(private a : ProductService,private bs:Router,private service:ProductService,private cart:CartService){}
  ngOnInit(){
    this.a.getProducts().subscribe((res)=>{
      this.pArray= res
    });
  }

addtocart(p:any){
  this.cart.addproduct(p);
  this.bs.navigateByUrl("/nav/products")
}
ngonInit(){
this.service.getProducts().subscribe((res)=>{
  this.pArray=res;
})
}

}
