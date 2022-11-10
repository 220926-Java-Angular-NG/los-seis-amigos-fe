import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-services/cart.service';
import { UserService } from 'src/app/services/user-services/user.service';
import { DEFAULT_SET_PRICE, Set, CartItem } from '../cart-item/CartItem';
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
  cartId?:number

  constructor(private cartService:CartService, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    // if (!this.userService.isLoggedIn()) {
    //   this.router.navigate(['Home'])
    // }
    this.price = this.set?.price ? this.set.price : DEFAULT_SET_PRICE 
    this.checkIfInCart()
  }

  checkIfInCart() {
    if (this.set)
      this.cartService.getCartByUserId(this.userService.getUserId()).subscribe(_cartItems => {
        _cartItems.forEach(item => {

          if (this.set?.setcode === item.set.setcode) {
            this.set.isInCart = true
            this.set.cartItemId = item.cartItemId

          }
          })
        })
  }

  addToCart(): void {
    
    if (this.set) {
      const cartItem:CartItem = {
        set: this.set,
        cartItemId: 0,
        quantity: this.quantity,
        user: {
          id: this.userService.getUserId()
        }
      }
      this.cartService.addCartItem(cartItem).subscribe(_cartItem => {
        console.log('added to cart: ', _cartItem)
        if (this.set) {
          this.set.isInCart = true
          this.set.cartItemId = _cartItem.cartItemId
        }
      })

    }
    // console.log(`added ${this.quantity} packs of ${this.set.name} to imaginary cart costing ${this.price * this.quantity}`)
  }

  goToCardList() {
    if (this.router.url === '/items' &&this.set)
      this.router.navigate([`cards/set/${this.set.setcode}`])
  }

  removeFromCart():void {
    console.log('attemp to delete')
    if (this.set?.cartItemId)
      this.cartService.removeCartItemById(this.set.cartItemId).subscribe((s) => {
        // if (s && this.cartItems)
          // this.cartItems = this.cartItems.filter(item => item.cartItemId !== cartId)
        console.log('removed item from cart');
        if (this.set)
          this.set.isInCart = false
        // this.isInCart = 
      })
  }

  updateQuantity(change:number): void {
    if (this.quantity + change >= 1)
      this.quantity += change
  }

}
