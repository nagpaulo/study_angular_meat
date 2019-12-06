import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from 'app/restaurants/restaurants.services';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
   constructor(
    private restaurantService: RestaurantsServices,
    private route: ActivatedRoute
  ) { }

  menu: Observable<MenuItem[]>

  ngOnInit() {
    this.menu = this.restaurantService
    .menuOfrestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
