import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-services/card.service';
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
  cardsOwned?:Card[]
  card?:Card

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.user = SAMPLE_USER
    this.cardsOwned = SAMPLE_CARDS
    this.getCards()
  }

  getCards() {
    // TODO: implement play inventory cards here
    this.cardService.getCardsBySet('commander').subscribe(cards => {
      this.cardsOwned = cards
      console.log(this.cardsOwned)
    })

  }

}
