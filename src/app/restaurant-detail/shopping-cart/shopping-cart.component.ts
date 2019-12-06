import { Component, OnInit } from '@angular/core';
import { ShoppingCardServices } from './shopping-cart.services';


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppinCardServices: ShoppingCardServices
  ) { }
  ngOnInit() {
  }

  items(): any[] {
    return this.shoppinCardServices.items;
  }
  
  total(): number {
    return this.shoppinCardServices.total()
  }

}
