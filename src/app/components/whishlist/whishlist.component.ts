import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from 'src/app/core/services/whishlist.service';
import { Product } from 'src/app/core/services/pipe/guard/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/services/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule , RouterLink, CuttextPipe],
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {
constructor(private _WhishlistService:WhishlistService,
  private _ToastrService:ToastrService,
  private _Renderer2:Renderer2,
  private _CartService:CartService){}
products : Product []=[];
WishListData:string[]=[];

ngOnInit(): void {
this._WhishlistService.getToWishList().subscribe({
  next:(res)=>{
    console.log(res);
    this.products=res.data
    const newData= res.data.map((item:any) => item._id)
      this.WishListData=newData ;
  }
})
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
      this._ToastrService.success(res.message)
      this.WishListData=res.data;
      this._WhishlistService.getToWishList().subscribe({
        next:(res)=>{
          console.log(res);

          this.products = res.data;
        }
      })
    }
  });
};

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
}
