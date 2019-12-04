import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsServices } from './restaurants.services';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsServices: RestaurantsServices) { }

  ngOnInit() {
    this.restaurants = this.restaurantsServices.restaurants();
  }

}
