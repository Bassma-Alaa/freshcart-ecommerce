import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=> m.BlankLayoutComponent),
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then((m) => m.HomeComponent), title:' Home'},
    {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m) => m.CartComponent), title:'Cart'},
    {path:'products',loadComponent:()=>import('./components/products/products.component').then((m) => m.ProductsComponent), title:'Products'},
    {path:'productdetails/:id',loadComponent:()=>import('./components/details/details.component').then((m) => m.DetailsComponent), title:'Products details  '},
    {path:'whishlist',loadComponent:()=>import('./components/whishlist/whishlist.component').then((m) => m.WhishlistComponent), title:'whishlist  '},
    {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m) => m.BrandsComponent), title:'Brands'},
    {path:'allorders',loadComponent:()=>import('./components/allorders/allorders.component').then((m) => m.AllordersComponent), title:'allorders'},
    {path:'forgotpassword',loadComponent:()=>import('./components/forgotpassword/forgotpassword.component').then((m) => m.ForgotpasswordComponent), title:'forgotpassword'},
    {path:'Payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m) => m.PaymentComponent), title:'Payment'},
    {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m) => m.CategoriesComponent), title:'Categories'},
    {path:'categorydetails/:id',loadComponent:()=>import('./components/categorydetails/categorydetails.component').then((m) => m.CategorydetailsComponent), title:'categorydetails'},
  ]
},
{path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),
children:[
  {path:'',redirectTo:'login',pathMatch: 'full' },
  {path:'login',loadComponent:()=>import('./components/login/login.component').then((m) => m.LoginComponent),title:'login'},
  {path:'register',loadComponent:()=>import('./components/register/register.component').then((m) => m.RegisterComponent),title:'Register'},
  {path:'forgotpassword',loadComponent:()=>import('./components/forgotpassword/forgotpassword.component').then((m) => m.ForgotpasswordComponent), title:'forgotpassword'}
]
},
{path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
