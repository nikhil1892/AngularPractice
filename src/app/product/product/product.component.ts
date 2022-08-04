import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { productService } from '../product.service';
import { IProduct } from './IProduct'


@Component({
  // selector: 'pm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageTitle: string = 'this is me';
  showImage = false;
  sub! : Subscription;
   @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  private _filterdText: string = '';
  get filterdText(): string {
    return this._filterdText;
  }
  set filterdText(value: string) {
    this._filterdText = value;

    this.filterProdcut = this.performFilter(value);
    console.log(this.filterProdcut);
  }

  filterProdcut: IProduct[] = [];
  products: IProduct[] = [];
  // products: IProduct[] = [

  //   {
  //     "productId": 1,
  //     "productName": "Leaf Rake",
  //     "productCode": "GDN-0011",
  //     "releaseDate": "March 19, 2021",
  //     "description": "Leaf rake with 48-inch wooden handle.",
  //     "price": 19.95,
  //     "starRating": 3.2,
  //     "imageUrl": "assets/images/leaf_rake.png"
  //   },
  //   {
  //     "productId": 2,
  //     "productName": "Garden Cart",
  //     "productCode": "GDN-0023",
  //     "releaseDate": "March 18, 2021",
  //     "description": "15 gallon capacity rolling garden cart",
  //     "price": 32.99,
  //     "starRating": 4.2,
  //     "imageUrl": "assets/images/garden_cart.png"
  //   },
  //   {
  //     "productId": 5,
  //     "productName": "Hammer",
  //     "productCode": "TBX-0048",
  //     "releaseDate": "May 21, 2021",
  //     "description": "Curved claw steel hammer",
  //     "price": 8.9,
  //     "starRating": 4.8,
  //     "imageUrl": "assets/images/hammer.png"
  //   },
  //   {
  //     "productId": 8,
  //     "productName": "Saw",
  //     "productCode": "TBX-0022",
  //     "releaseDate": "May 15, 2021",
  //     "description": "15-inch steel blade hand saw",
  //     "price": 11.55,
  //     "starRating": 3.7,
  //     "imageUrl": "assets/images/saw.png"
  //   },
  //   {
  //     "productId": 10,
  //     "productName": "Video Game Controller",
  //     "productCode": "GMG-0042",
  //     "releaseDate": "October 15, 2020",
  //     "description": "Standard two-button video game controller",
  //     "price": 35.95,
  //     "starRating": 4.6,
  //     "imageUrl": "assets/images/xbox-controller.png"
  //   }

  // ];
  constructor(private productService : productService) {
  
   }

  ngOnInit(): void {
    this.filterdText = 'cart';
    this.productService.getProduct().subscribe({
      next: res => {
         this.products = res;
        this.filterProdcut = res;
      },
      error: err => console.log(err)
    });

    // this.products =  this.productService.getProduct();
  }

  // ngOnDestroy(){
  //   debugger;
  //   this.sub.unsubscribe();
  // }

  toggleImage() {
    this.showImage = !this.showImage;
    // this.notify.emit('changed header');
  }
  performFilter(filterValue: string): IProduct[] {
    filterValue = filterValue.toLowerCase();
    return this.products.filter((value:IProduct) =>
      value.productName.toLocaleLowerCase().includes(filterValue)
    );
  }

  onNotify(message : string){
    console.log('product componet = ' + message);
    this.notifyParent.emit(message);
    this.pageTitle = message;
  }


}


