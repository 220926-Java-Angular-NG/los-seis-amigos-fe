import { Component, OnInit } from '@angular/core';
import { Pack } from './Pack';
import { SAMPLE_PACKS } from './packsData';

@Component({
  selector: 'app-product-wrapper',
  templateUrl: './product-wrapper.component.html',
  styleUrls: ['./product-wrapper.component.css']
})
export class ProductWrapperComponent implements OnInit {

  packs?: Pack[]

  constructor() { }

  ngOnInit(): void {
    this.packs = SAMPLE_PACKS
  }

}
