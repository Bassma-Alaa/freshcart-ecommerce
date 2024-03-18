import { Product } from 'src/app/core/services/pipe/guard/interfaces/product';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute:ActivatedRoute ,
    private _ProductService:ProductService,
    private _Renderer2:Renderer2,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    ){}
  Productid!:string|null;
  ProductDetails:any=null;
  ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
  next:(params)=>{
      this.Productid=params.get('id');
      console.log(this.Productid);

  }
});
this._ProductService.getProductDetails(this.Productid).subscribe({
  next:({data})=>{
    this.ProductDetails=data;

  }
});



}

addProduct(id:any , element:HTMLButtonElement):void{
  this._Renderer2.setAttribute(element,'disabled','true');
  this._CartService.addToCart(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message);
      this._Renderer2.removeAttribute(element,'disabled');

      this._CartService.cartNumber.next(response.numOfCartItems);
    },
    error:(err)=>{
      this._Renderer2.removeAttribute(element,'disabled')
    }
  });
}
ProductDetailsOption: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  items:1,
  nav: true
}
}
