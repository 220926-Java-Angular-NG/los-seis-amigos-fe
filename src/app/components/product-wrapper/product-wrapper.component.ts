import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card-services/card.service';
import { CartService } from 'src/app/services/cart-services/cart.service';
import { UserService } from 'src/app/services/user-services/user.service';
import { Set } from '../cart-item/CartItem';

@Component({
  selector: 'app-product-wrapper',
  templateUrl: './product-wrapper.component.html',
  styleUrls: ['./product-wrapper.component.css']
})
export class ProductWrapperComponent implements OnInit {

  sets?:Set[]

  constructor(private cardService:CardService, private cartService:CartService, private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    // if (!this.userService.isLoggedIn()) {
    //   this.router.navigate(['Home'])
    // }
    this.getSets()
    
  }

  getSets() {
    this.cardService.getAllSets().subscribe(allSets => {
      this.sets=allSets
      console.log(this.sets)
      this.checkInCarts()
    })
  }

  checkInCarts() {
    if (this.sets)
      this.cartService.getCartByUserId(this.userService.getUserId()).subscribe(_cartItems => {
      _cartItems.forEach(item => {
        let index = this.sets?.findIndex(set => set.setcode === item.set.setcode)
        if (index !== undefined && index >= 0 && this.sets) {
          this.sets[index].isInCart = true
          this.sets[index].cartItemId = item.cartItemId
        }
        })
      })
  }

}
