import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-services/cart.service';
import { UserService } from 'src/app/services/user-services/user.service';
import { CartItem } from '../cart-item/CartItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutInfo:any = FormGroup;
  cartItems?:CartItem[]
  cartTotal:number = 0
  price:number = 5.99
  constructor(private fb:FormBuilder, private router:Router, private userService:UserService, private cartService:CartService) { }

  ngOnInit(): void {
    this.getCartItems()
    this.checkoutInfo = this.fb.group({
      firstname:['',Validators.compose([Validators.required])],
      lastname:['', Validators.required],
      cardNumber:['', Validators.required],
      cardPin:['', Validators.required],
      expirationDate:['', Validators.required],
      zipcode:['', Validators.required]
    })
  }

  getCartItems() {
    this.cartService.getCartByUserId(this.userService.getUserId()).subscribe(_cartItems => {
      this.cartItems = _cartItems
      this.updateCartTotal()
    })
  }

  updateCartTotal() {
    if (this.cartItems) {
      this.cartTotal = 0
      this.cartItems.forEach(item => this.cartTotal += (this.price * item.quantity))
    }
    this.cartTotal = Number.parseFloat(this.cartTotal.toFixed(2))
  }

  finishCheckout() {

    this.router.navigate(['profile'])
  }

}
