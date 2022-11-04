import { Component, Input, OnInit } from '@angular/core';
import { Pack } from '../product-wrapper/Pack';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  @Input() pack?:Pack
  // @Input() name?:string = 'Name of Pack'
  // @Input() setName?:string = 'Classic Sixth Edition'
  // @Input() imgSrc?:string = 'https://i.ebayimg.com/images/g/Ur8AAOSw85Rivgj-/s-l500.jpg'
  // @Input() price?:number = 5.99

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    console.log('added to imaginary cart')
  }

}
