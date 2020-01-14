import { NgModule, ModuleWithProviders } from '@angular/core'
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCardServices } from 'app/restaurant-detail/shopping-cart/shopping-cart.services';
import { RestaurantsServices } from 'app/restaurants/restaurants.services';
import { OrderService } from 'app/order/order.service';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent
                    , FormsModule, ReactiveFormsModule, CommonModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCardServices, RestaurantsServices, OrderService]
        }
    }
}