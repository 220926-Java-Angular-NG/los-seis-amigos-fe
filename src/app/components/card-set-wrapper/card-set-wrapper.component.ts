import { Component, OnInit } from '@angular/core';
import { CardsOwnedService } from 'src/app/services/cards-owned.service';
import { cardOwned } from 'src/app/services/cardsOwned';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-card-set-wrapper',
  templateUrl: './card-set-wrapper.component.html',
  styleUrls: ['./card-set-wrapper.component.css']
})
export class CardSetWrapperComponent implements OnInit {


  userSets?:string[]
  cardsOwnedSet?:cardOwned[]
  showSet?:string

  constructor(
    private userService:UserService,
    private cardsOwnedService:CardsOwnedService
  ) { }

  ngOnInit(): void {
    this.getUserSets()
  }

  getUserSets() {
    this.cardsOwnedService.getUserOwnedSets(this.userService.getUserId()).subscribe(_sets => {
      console.log(_sets)
      this.userSets = _sets
      // this.showSet = this.userSets[0]
      this.getUserCardsOwnedSet(this.userSets[0])
    })
  }

  getUserCardsOwnedSet(setcode:string) {
    this.cardsOwnedSet = []
    console.log(this.showSet, setcode)
    if (this.showSet === setcode) {
      this.showSet = ''
      // console.log(this.showSet, setcode)
      // return
    }
    this.cardsOwnedService.getUserOwnedCardsBySet(this.userService.getUserId(),setcode).subscribe(_cardsOwnedSet => {
      this.cardsOwnedSet = _cardsOwnedSet
      console.log(this.cardsOwnedSet)
      this.showSet = setcode
    })
  }

}
