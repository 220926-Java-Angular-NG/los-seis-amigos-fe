import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-services/card.service';
import { Set } from '../cart-item/CartItem';
import { Pack } from './Pack';
import { SAMPLE_PACKS } from './packsData';

@Component({
  selector: 'app-product-wrapper',
  templateUrl: './product-wrapper.component.html',
  styleUrls: ['./product-wrapper.component.css']
})
export class ProductWrapperComponent implements OnInit {

  packs?: Pack[]
  sets?:Set[]

  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.packs = SAMPLE_PACKS
    this.getSets()
    
  }

  getSets() {
    this.cardService.getAllSets().subscribe(allSets => {
      this.sets=allSets
      console.log(this.sets)
    })
  }

}
