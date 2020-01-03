import { Injectable } from "@angular/core";
import { ShoppingCardServices } from "app/restaurant-detail/shopping-cart/shopping-cart.services";
import { CartItem } from "app/restaurant-detail/shopping-cart/card-item.model";

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCardServices){}

    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem){
        this.cartService.removeItem(item);
    }

    itemsValue(): number {
        return this.cartService.total()
    }
}