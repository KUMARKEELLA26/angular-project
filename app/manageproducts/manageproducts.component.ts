import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { product } from '../product';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {

  pArray:any;
  constructor(private a : ProductService){}
  ngOnInit(){
    this.a.getProducts().subscribe((res)=>{
      this.pArray = res
    });
  }

deleteme(t:any){
  this.a.deleteproducts(t)

}

changeflag(p:product){
  p.pflag=true;
}

update(p:product){
  p.pflag=false;
  this.a.updateproduct(p);
}

}
