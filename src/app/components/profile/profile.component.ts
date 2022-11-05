import { Component, OnInit } from '@angular/core';
import { SAMPLE_CARDS, SAMPLE_USER } from './userData';
import {Card, UserInterface} from './userInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user?:UserInterface
  cardsOwned?:Card[]

  constructor() { }

  ngOnInit(): void {
    this.user = SAMPLE_USER
    this.cardsOwned = SAMPLE_CARDS
  }

}
