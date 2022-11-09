import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart-services/cart.service';
import { CartItem } from './CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem?:CartItem
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() updateItemQuantityEvent = new EventEmitter<number>();

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }


  //TODO: Connect to service
  updateQuantity(change:number): void {
    if (this.cartItem)
      if (this.cartItem.quantity + change >= 1)
        this.updateCart(this.cartItem.quantity + change)
  }

  updateCart(quantity:number):void {
    if(this.cartItem) {
      this.updateItemQuantityEvent.emit(quantity)
    }
  }

  deleteCartItem():void {
    if(this.cartItem) {
      this.deleteItemEvent.emit(this.cartItem.cartItemId)
      // this.cartService.removeCartItemById(this.cartItem.cartItemId).subscribe((s) => {
      //   console.log(s,'asdasd');
      // })

    }
  }

}
