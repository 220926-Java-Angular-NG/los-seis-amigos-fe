import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../cart/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem?:CartItem

  constructor() { }

  ngOnInit(): void {
  }


  //TODO: Connect to service
  updateQuantity(change:number): void {
    if (this.cartItem)
      if (this.cartItem.quantity + change >= 1)
        this.cartItem.quantity += change
  }

}
