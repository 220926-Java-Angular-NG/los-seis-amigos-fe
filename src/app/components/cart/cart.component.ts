import { Component, OnInit } from '@angular/core';
import { CartItem } from './CartItem';
import { SAMPLE_CART } from './cartItemsData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems?:CartItem[]
  cartTotal:number = 0

  constructor() { }

  ngOnInit(): void {
    this.cartItems = SAMPLE_CART
    if (this.cartItems)
      this.cartItems.forEach(item => this.cartTotal += (item.pack.price * item.quantity))
    this.cartTotal = Number.parseFloat(this.cartTotal.toFixed(2))
  }

}
