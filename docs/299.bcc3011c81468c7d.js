"use strict";(self.webpackChunkappE_commarce=self.webpackChunkappE_commarce||[]).push([[299],{5299:(u,a,e)=>{e.r(a),e.d(a,{BrandsComponent:()=>m});var i=e(6814),p=e(1120),t=e(4769),o=e(1132);const _=function(n){return["/details",n]};function r(n,d){if(1&n&&(t.TgZ(0,"div",4)(1,"div",5)(2,"div",6),t._UZ(3,"img",7),t.TgZ(4,"h3",8),t._uU(5),t.qZA()()()()),2&n){const s=d.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(4,_,s._id)),t.xp6(1),t.Q6J("src",s.image,t.LSH)("alt",s.name),t.xp6(2),t.Oqu(s.name)}}let m=(()=>{class n{constructor(s){this._ProductsService=s,this.Brands=[]}ngOnInit(){localStorage.setItem("current","/brands"),this._ProductsService.getBrands().subscribe({next:s=>{this.Brands=s.data}})}static#t=this.\u0275fac=function(c){return new(c||n)(t.Y36(o.s))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"container","p-5"],[1,"row","g-5"],[1,"text-main"],["class","col-md-3  position-relative",4,"ngFor","ngForOf"],[1,"col-md-3","position-relative"],[1,"product","p-2"],[1,"cursor-pointer",3,"routerLink"],[1,"w-100",2,"height","350px",3,"src","alt"],[1,"text-center","text-main","h6"]],template:function(c,l){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"All Brands"),t.qZA(),t.YNc(4,r,6,6,"div",3),t.qZA()()),2&c&&(t.xp6(4),t.Q6J("ngForOf",l.Brands))},dependencies:[i.ez,i.sg,p.rH]})}return n})()},1132:(u,a,e)=>{e.d(a,{s:()=>t});var i=e(4769),p=e(9862);let t=(()=>{class o{constructor(r){this._HttpClient=r}allProductsApi(r=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${r}`)}ProductDetailsApi(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${r}`)}getCategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getCategoriesDetails(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${r}`)}getBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}static#t=this.\u0275fac=function(m){return new(m||o)(i.LFG(p.eN))};static#e=this.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);