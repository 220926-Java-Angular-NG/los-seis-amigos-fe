import { Component, Input, OnInit } from '@angular/core';
import { Pack } from '../product-wrapper/Pack';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  @Input() pack?:Pack
  quantity : number = 1
  isInCart?:boolean
  // @Input() name?:string = 'Name of Pack'
  // @Input() setName?:string = 'Classic Sixth Edition'
  // @Input() imgSrc?:string = 'https://i.ebayimg.com/images/g/Ur8AAOSw85Rivgj-/s-l500.jpg'
  // @Input() price?:number = 5.99

  constructor() { }

  ngOnInit(): void {
  }

  checkIfInCart() {
    // isInCart = //method that checks if its in cart
  }

  addToCart(): void {
    console.log(`added ${this.quantity} packs of ${this.pack?.setName} to imaginary cart`)
  }

  updateQuantity(change:number): void {
    if (this.quantity + change >= 1)
      this.quantity += change
  }

}
