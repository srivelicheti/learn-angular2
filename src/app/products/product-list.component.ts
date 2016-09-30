import {Component, OnInit} from "angular2/core"
import {IProduct} from "./product"
import {StarComponent} from '../shared/star.component'
import {ProductService} from './product.service'

@Component({
    selector:'pm-products',
    templateUrl:"app/products/product-list.component.html",
    styleUrls:["app/products/product-list.component.css"],
    directives: [StarComponent]
   
})

export class ProductListComponent implements OnInit{
    private _productService : ProductService;
    constructor(prodService : ProductService)  {
        this._productService = prodService;
        //this.products = prodService.getProducts();
    }
    // productService : ProductService = 
    pageTitle: string ="Product List";
    imageWidth: number = 50;
    imageMargin:number = 2;
    showImage:boolean= false;
    filterString:string ='cart';
    products:IProduct[] ;
    toggleImage(): void {
        this.showImage = !this.showImage;
    };
    ngOnInit():void {
        // console.log('In OnInit');
        this.products = this._productService.getProducts();
    };
    onRatingClicked(event:string ) : void{
        console.log(event);
    }
}