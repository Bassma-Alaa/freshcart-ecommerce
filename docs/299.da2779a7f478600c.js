"use strict";(self.webpackChunkEcommerce=self.webpackChunkEcommerce||[]).push([[299],{5299:(d,c,s)=>{s.r(c),s.d(c,{BrandsComponent:()=>_});var o=s(6814),t=s(4769),i=s(0);function n(e,l){if(1&e&&(t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA()()),2&e){const r=l.$implicit;t.xp6(2),t.Q6J("src",r.image,t.LSH)("alt",r.name)}}let _=(()=>{class e{constructor(r){this._ProductService=r,this.brands=[]}ngOnInit(){this._ProductService.getbrands().subscribe({next:r=>{console.log(r.data),this.brands=r.data}})}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(i.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product"],[1,"w-100",3,"src","alt"]],template:function(a,u){1&a&&(t.TgZ(0,"section")(1,"div",0),t.YNc(2,n,3,2,"div",1),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("ngForOf",u.brands))},dependencies:[o.ez,o.sg]})}return e})()},0:(d,c,s)=>{s.d(c,{M:()=>i});var o=s(4769),t=s(9862);let i=(()=>{class n{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getbrands(){return this._HttpClient.get(this.baseUrl+"brands")}getProducts(e=1){return this._HttpClient.get(this.baseUrl+`products?page=${e}&limit=20`)}getcategorydetails(e){return this._HttpClient.get(this.baseUrl+`categories/${e}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getProductDetails(e){return this._HttpClient.get(this.baseUrl+`products/${e}`)}static#t=this.\u0275fac=function(l){return new(l||n)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);