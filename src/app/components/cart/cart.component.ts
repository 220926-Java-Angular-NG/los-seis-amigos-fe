import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-services/cart.service';
import { UserService } from 'src/app/services/user-services/user.service';
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

  constructor(private cartService:CartService, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    // if (!this.userService.isLoggedIn()) {
    //   this.router.navigate(['Home'])
    // }
    // this.cartItems = SAMPLE_CART
    // if (this.cartItems)
    //   this.cartItems.forEach(item => this.cartTotal += (this.price * item.quantity))
    // this.cartTotal = Number.parseFloat(this.cartTotal.toFixed(2))
    this.getCart()
  }

  getCart() {
    this.cartService.getCartByUserId(this.userService.getUserId()).subscribe(cart => {
      this.cartItems = cart
      this.updateCartTotal()
    })
  }

  goToCheckout() {
    this.router.navigate(['checkout'])
  }

  updateCartItemQuantity(CartId:number, quantity:number) {
    console.log('updating cartId: ' , CartId, quantity )
    this.cartService.updateCartItemQuantity(CartId, quantity).subscribe(_cartItem => {
      if(this.cartItems) {
        let index = this.cartItems.findIndex(item => {
          return _cartItem.cartItemId === item.cartItemId
        })
        if (index !== undefined && index >= 0 && this.cartItems) {
          this.cartItems.splice(index, 1, _cartItem)
        }
      }
      this.updateCartTotal()
    })
  }

  deleteFromCart(cartId:number) {
    this.cartService.removeCartItemById(cartId).subscribe((s) => {
      if (s && this.cartItems)
        this.cartItems = this.cartItems.filter(item => item.cartItemId !== cartId)

        this.updateCartTotal()
      // console.log(s,'asdasd');
    })
  }

  updateCartTotal() {
    if (this.cartItems) {
      this.cartTotal = 0
      this.cartItems.forEach(item => this.cartTotal += (this.price * item.quantity))
    }
    this.cartTotal = Number.parseFloat(this.cartTotal.toFixed(2))
  }

}
