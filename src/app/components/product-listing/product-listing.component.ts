import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_SET_PRICE, Set } from '../cart-item/CartItem';
import { Pack } from '../product-wrapper/Pack';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  @Input() set?:Set
  quantity : number = 1
  isInCart?:boolean
  price:number = DEFAULT_SET_PRICE

  constructor() { }

  ngOnInit(): void {
    this.price = this.set?.price ? this.set.price : DEFAULT_SET_PRICE 
  }

  checkIfInCart() {
    // isInCart = //method that checks if its in cart
  }

  addToCart(): void {
    if (this.set)
      console.log(`added ${this.quantity} packs of ${this.set.name} to imaginary cart costing ${this.price * this.quantity}`)
  }

  updateQuantity(change:number): void {
    if (this.quantity + change >= 1)
      this.quantity += change
  }

}
