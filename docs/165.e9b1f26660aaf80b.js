"use strict";(self.webpackChunkappE_commarce=self.webpackChunkappE_commarce||[]).push([[165],{5165:(h,c,i)=>{i.r(c),i.d(c,{ProductDetailsComponent:()=>D});var _=i(6814),a=i(5819),t=i(4769),l=i(1132),d=i(1120),p=i(6286),m=i(4219);function v(r,P){if(1&r&&t._UZ(0,"img",13),2&r){const o=t.oxw().$implicit;t.Q6J("src",o,t.LSH)}}function g(r,P){1&r&&(t.ynx(0),t.YNc(1,v,1,1,"ng-template",12),t.BQk())}let D=(()=>{class r{constructor(o,s,e,n,u){this._ProductsService=o,this._ActivatedRoute=s,this._CartService=e,this.toastEvokeService=n,this._Renderer2=u,this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1}},nav:!0},this.pDetails={}}ngOnInit(){localStorage.setItem("current","/details"),this._ActivatedRoute.paramMap.subscribe({next:o=>{let s=o.get("id");this._ProductsService.ProductDetailsApi(s).subscribe({next:e=>{this.pDetails=e.data}})}})}addProduct(o,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addToCart(o).subscribe({next:e=>{this.toastEvokeService.success("Success!",e.message).subscribe(),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNum.next(e.numOfCartItems)},error:e=>{this._Renderer2.removeAttribute(s,"disabled")}})}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(l.s),t.Y36(d.gz),t.Y36(p.N),t.Y36(m.nm),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-details"]],standalone:!0,features:[t.jDz],decls:24,vars:6,consts:[[1,"container","p-5"],[1,"row","align-items-center"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"text-muted"],[1,"d-flex","justify-content-between"],[1,"rating"],[1,"fa-solid","fa-star","rating-color"],[1,"w-100","main-btn",3,"click"],["cartBtn",""],["carouselSlide",""],[3,"src"]],template:function(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"owl-carousel-o",3),t.YNc(5,g,2,0,"ng-container",4),t.qZA()()(),t.TgZ(6,"div",5)(7,"div")(8,"h3"),t._uU(9),t.qZA(),t.TgZ(10,"p",6),t._uU(11),t.qZA(),t.TgZ(12,"div",7)(13,"p"),t._uU(14),t.TgZ(15,"span"),t._uU(16,"EGP"),t.qZA()(),t.TgZ(17,"div",8),t._UZ(18,"i",9),t.TgZ(19,"span"),t._uU(20),t.qZA()()()(),t.TgZ(21,"button",10,11),t.NdJ("click",function(){t.CHM(n);const E=t.MAs(22);return t.KtG(e.addProduct(e.pDetails._id,E))}),t._uU(23,"Add Product"),t.qZA()()()()}2&s&&(t.xp6(4),t.Q6J("options",e.customOptions),t.xp6(1),t.Q6J("ngForOf",e.pDetails.images),t.xp6(4),t.Oqu(e.pDetails.title),t.xp6(2),t.Oqu(e.pDetails.description),t.xp6(3),t.Oqu(e.pDetails.price),t.xp6(6),t.Oqu(e.pDetails.ratingsAverage))},dependencies:[_.ez,_.sg,a.bB,a.Fy,a.Mp]})}return r})()}}]);