import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';
import { ProductsComponent } from './products/products.component';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: product[] = [
    {
      productId: 1,
      productCompany: "Samsung",
      productImage: "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/41rxSxVXs7L._AC_SX368_.jpg",
      productName: "Galaxy",
      productPrice: 25000,
      pflag: false
    },
    {
      productId: 2,
      productCompany: "Iqoo  ",
      productImage: "https://www.91-img.com/pictures/148536-v5-iqoo-neo-6-5g-mobile-phone-large-2.jpg?tr=h-271,c-at_max,q-60,pr-true",
      productName: "Iqoo NEO 6",
      productPrice: 36000,
      pflag: false
    },

    {
      productId: 3,
      productCompany: "Motrolo ",
      productImage: "https://motorolain.vtexassets.com/arquivos/ids/157225/Motorola-edge-30-pdp-render-Mojito-4-31f5yjhf.png?v=637878943961030000",
      productName: "Moto",
      productPrice: 45200,
      pflag: false
    },

    {
      productId: 4,
      productCompany: "Realme3pro",
      productImage: "https://boip.in/36498-large_default/realme-3-dynamic-black-3gb-ram-32gb-storage.jpg",
      productName: "Realme",
      productPrice: 17000,
      pflag: false
    },



  ]

  getProducts() {
    return of(this.products);
  }

  addproduct(newpro: product) {
    this.products.push(newpro);
  }


  deleteproducts(pro: product) {
    let index = this.products.findIndex((item) => {
      if (item.productId == pro.productId) {
        return item.productId;

      }


    })
    this.products.splice(index, 1)
  }



  updateproduct(pro: product) {
    let index = this.products.findIndex((item) => {
      if (item.productId == pro.productId) {
        return item.productId;

      }
    })
    this.products.splice(index, 1, pro)
  }








}




