import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import {   Product } from 'src/app/core/services/pipe/guard/interfaces/product';
import { CuttextPipe } from 'src/app/core/services/pipe/cuttext.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/services/pipe/guard/interfaces/category';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/services/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WhishlistService } from 'src/app/core/services/whishlist.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _ProductService:ProductService ,
    private _CartService:CartService ,
    private _ToastrService:ToastrService ,
    private _Renderer2:Renderer2,
    private _WhishlistService:WhishlistService
    ){}

products : Product []=[];

categories: Category[]=[];

WishListData:string[]=[];

term:string='';


ngOnInit(): void {
  this._ProductService.getProducts().subscribe({
    next:(response)=>{
      console.log(response.data);
      this.products = response.data;

    }
  });
  this._ProductService.getCategories().subscribe({
    next:(response)=>{
      console.log( response);
      this.categories= response.data;

    }
  })
  this._WhishlistService.getToWishList().subscribe({
    next:(res)=>{
      const newData= res.data.map((item:any) => item._id)
      this.WishListData=newData ;
    }
  })
}

addProduct(id:any , element:HTMLButtonElement):void{
  this._Renderer2.setAttribute(element,'disabled','true');
  this._CartService.addToCart(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message);
      this._Renderer2.removeAttribute(element,'disabled');
      this._CartService.cartNumber.next(response.numOfCartItems);
      this._WhishlistService.favNum.next(response.count)
    },
    error:(err)=>{
      this._Renderer2.removeAttribute(element,'disabled')
    }
  });
}


addFav(prodid:string|undefined):void{
  this._WhishlistService.addToWishList(prodid).subscribe({
    next:(res)=>{
      console.log(res);
      this._ToastrService.success(res.message)
      this.WishListData=res.data;
    }
  });
};

removeFav(prodId:string | undefined):void{
  this._WhishlistService.removeWishList(prodId).subscribe({
    next:(res)=>{
      console.log(res.data);
      this._ToastrService.success(res.message)
      this.WishListData=res.data;
    }
  });
};

categoryOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: true
}

mainSliderOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay: true,
  dots: true,
  navSpeed: 700,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  items:1,
  nav: false
}



}
