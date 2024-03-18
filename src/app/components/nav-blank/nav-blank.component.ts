import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
constructor(private _Router:Router ,private _CartService:CartService , private _Renderer2:Renderer2, private _WhishlistService:WhishlistService){}
@ViewChild('navBar') navElemnt!:ElementRef
@HostListener('window:scroll')
onScrol():void{
  if(scrollY>300){
    this._Renderer2.addClass(this.navElemnt.nativeElement,'px-5');
    this._Renderer2.addClass(this.navElemnt.nativeElement,'red');
  }else{
    this._Renderer2.removeClass(this.navElemnt.nativeElement,'px-5');
    this._Renderer2.removeClass(this.navElemnt.nativeElement,'shadow');
  }

}
cartNum:number=0;
favNum:number=0;
  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
    next:(data)=>{
      this .cartNum= data;
    }
    });
    this._CartService.getCartUser().subscribe({
      next:(respons)=>{
        this.cartNum=respons.numOfCartItems
      }
    });
    this._WhishlistService.favNum.subscribe({
      next:(data)=>{
        this.favNum = data;
      }
    })
  }

signOut():void{
  localStorage.removeItem('etoken');
  this._Router.navigate(['/login']);
}
}
