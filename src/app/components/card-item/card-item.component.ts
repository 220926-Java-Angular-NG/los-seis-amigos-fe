import { Component, Input, OnInit } from '@angular/core';
import { cardOwned } from 'src/app/services/cardsOwned';
import { Card } from '../profile/userInterface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() card?:cardOwned
  @Input() unOwnedCard?:Card

  constructor() { }

  ngOnInit(): void {
    
  }

}
