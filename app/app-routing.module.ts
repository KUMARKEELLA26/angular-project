import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'nav',component:NavbarComponent,

  children:[
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'products', component:ProductsComponent},
    {path:'cart',component:CartComponent}

  ]},
    {path:'admin',component:DashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'add',component:AddproductsComponent},
      {path:'products',component:ProductsComponent},
      {path:'manageproducts',component:ManageproductsComponent }


    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
