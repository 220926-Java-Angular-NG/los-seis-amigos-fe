import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-services/cart.service';
import { CartItem } from '../cart-item/CartItem';
import { UserInterface } from '../profile/userInterface';
import { SAMPLE_CART } from './cartItemsData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems?:CartItem[]
  cartTotal:number = 0
  price:number = 5.99
  // TODO: integrate userService
  userId:number = 1

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // this.cartItems = SAMPLE_CART
    // if (this.cartItems)
    //   this.cartItems.forEach(item => this.cartTotal += (this.price * item.quantity))
    // this.cartTotal = Number.parseFloat(this.cartTotal.toFixed(2))
    this.getCart()
  }

  getCart() {
    this.cartService.getCartByUserId(this.userId).subscribe(cart => {
      this.cartItems = cart
    })
  }

  deleteFromCart(cartId:number) {
    this.cartService.removeCartItemById(cartId).subscribe((s) => {
      if (s && this.cartItems)
        this.cartItems = this.cartItems.filter(item => item.cartItemId !== cartId)
      console.log(s,'asdasd');
    })
  }

}
