class Order {
    constructor(
        public name: string,
        public email: string,
        public address: string,
        public number: number,
        public optionalAddress: string,
        public orderItems: OrderItem[] = []
    ){}
}

class OrderItem {
    constructor(public quantit: number, public menuId: string){}
}

export {Order, OrderItem}