import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from 'app/restaurants/restaurants.services';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  constructor(
    private restaurantService: RestaurantsServices,
    private route: ActivatedRoute
  ) { }
  reviews: Observable<any>;

  ngOnInit() {
    this.reviews = this.restaurantService
                              .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
