import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardService } from 'src/app/services/card-services/card.service';
import { Set } from '../cart-item/CartItem';
import { Card } from '../profile/userInterface';

@Component({
  selector: 'app-set-display-card-wrapper',
  templateUrl: './set-display-card-wrapper.component.html',
  styleUrls: ['./set-display-card-wrapper.component.css']
})
export class SetDisplayCardWrapperComponent implements OnInit {
  private routeSub: Subscription;
  private setcode?: string
  public setItem?:Set
  public cardsInSet?:Card[]

  constructor(private route: ActivatedRoute,
          private cardsService:CardService) {
    this.routeSub = this.route.params.subscribe(params => {
      this.setcode = params['setcode']
    });
   }

  ngOnInit(): void {
    console.log(this.setcode)
    if (this.setcode)
      this.getSetItemInfo(this.setcode)
  }

  getSetItemInfo(set:string) {
    this.cardsService.getSetInfoWithCode(set).subscribe(_set => {
      this.setItem = _set
      this.getCardsFromSet(set)
    })
  }

  getCardsFromSet(set:string) {
    this.cardsService.getCardsBySet(set).subscribe(_cards => {
      this.cardsInSet = _cards
      console.log(_cards)
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
