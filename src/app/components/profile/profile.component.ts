import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card-services/card.service';
import { CardsOwnedService } from 'src/app/services/cards-owned.service';
import { cardOwned } from 'src/app/services/cardsOwned';
import { UserService } from 'src/app/services/user-services/user.service';
import { SAMPLE_CARDS, SAMPLE_USER } from './userData';
import {Card, UserInterface} from './userInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // TODO: implement userService
  user?:UserInterface
  cardsOwned?:cardOwned[]
  card?:Card


  constructor(private router:Router, private userService:UserService, private cardService: CardService, private cardsOwnedService:CardsOwnedService) { }

  ngOnInit(): void {
    // this.user = SAMPLE_USER
    // this.cardsOwned = SAMPLE_CARDS
    this.getCards()
    this.getCardsOwned()
    this.getUserInfo()
  }

  getCards() {
    // TODO: implement play inventory cards here
    this.cardService.getCardsBySet('commander').subscribe(cards => {
      // this.cardsOwned = cards
      console.log(this.cardsOwned)
    })
  }

  getCardsOwned() {
    this.cardsOwnedService.getUserCards(this.userService.getUserId()).subscribe(_cardsOwned => {
      console.log(this.userService.getUserId(), _cardsOwned)
      if (_cardsOwned !== undefined)
        this.cardsOwned = _cardsOwned
    })
  }

  getUserInfo() {
    this.userService.fetchUser().subscribe(_user => {
      this.user = _user
    })
  }
  resetPassword() {
    this.router.navigate(['reset'])
  }

  

}
