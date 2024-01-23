import { Injectable } from '@angular/core';
import { product } from '../product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  cart:product[] = []
  length:number=0;
  


  addproduct(pro: product) {
    this.cart.push(pro);
    this.length++; 
  }

  getitemsincart() {
    return of(this.cart);

  }

  removeitem(pro:any){
    let index = this.cart.findIndex( item => item.productId == pro.productId);
    this.cart.splice(index,1);
    this.length--;


  }


 
  
  
   
  

}
