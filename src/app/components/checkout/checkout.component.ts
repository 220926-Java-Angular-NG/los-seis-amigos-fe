import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardsOwnedService } from 'src/app/services/cards-owned.service';
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
  constructor(
    private fb:FormBuilder, 
    private router:Router, 
    private userService:UserService, 
    private cartService:CartService, 
    private cardsOwnedService:CardsOwnedService
  ) { }

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

  async finishCheckout() {
    let timeOutAmount = 100
    if (this.cartItems)
      this.cartItems.forEach(item => {
        
        for (let i = 0; i < item.quantity; i++) {
          timeOutAmount+=100
          setTimeout(()=> {
            this.cardsOwnedService.openSet(item).subscribe(_sets => {
              console.log(_sets)
            })
          }, 100*i)
          
        }
      })
    
    this.cartService.clearUserCartByUserId(this.userService.getUserId()).subscribe(_res => {
      console.log('cleared cart')
      setTimeout(()=> {
        this.cartItems = []
        this.router.navigate(['profile'])
      }, timeOutAmount)
    })
  }

}
