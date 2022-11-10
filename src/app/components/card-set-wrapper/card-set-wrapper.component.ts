import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-services/card.service';
import { CardsOwnedService } from 'src/app/services/cards-owned.service';
import { cardOwned } from 'src/app/services/cardsOwned';
import { UserService } from 'src/app/services/user-services/user.service';
import { UserSetsWithName } from './setspair';

@Component({
  selector: 'app-card-set-wrapper',
  templateUrl: './card-set-wrapper.component.html',
  styleUrls: ['./card-set-wrapper.component.css']
})
export class CardSetWrapperComponent implements OnInit {

  

  // userSets?:string[]
  userSetsWithName?:UserSetsWithName[]
  cardsOwnedSet?:cardOwned[]
  showSet?:string

  constructor(
    private userService:UserService,
    private cardsOwnedService:CardsOwnedService,
    private cardsService:CardService
  ) { }

  ngOnInit(): void {
    this.getUserSets()
  }

  getUserSets() {
    this.cardsOwnedService.getUserOwnedSets(this.userService.getUserId()).subscribe(_sets => {
      console.log(_sets)
      this.userSetsWithName = []
      _sets.forEach(item => {
        this.cardsService.getSetNameWithCode(item).subscribe(_name => {
          console.log(this.userSetsWithName)
          this.userSetsWithName?.push({set:item,name:_name.name})
        })
        // this.userSets?.push(item)
      })
      // this.userSets = _sets
      // this.showSet = this.userSets[0]
      if(this.userSetsWithName)
        this.getUserCardsOwnedSet(this.userSetsWithName[0].set)
    })
  }

  getUserCardsOwnedSet(setcode:string) {
    this.cardsOwnedSet = []
    console.log(this.showSet, setcode)
    if (this.showSet === setcode) {
      this.showSet = ''
      // console.log(this.showSet, setcode)
      return
    }
    this.cardsOwnedService.getUserOwnedCardsBySet(this.userService.getUserId(),setcode).subscribe(_cardsOwnedSet => {
      this.cardsOwnedSet = _cardsOwnedSet
      console.log(this.cardsOwnedSet)
      this.showSet = setcode
    })
  }

}
