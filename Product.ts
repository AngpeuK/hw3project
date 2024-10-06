export class Product {
    name : string
    price : number
    quantity : number

    constructor (name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getTotalValue () {
        return this.price * this.quantity
    }

    isInStock () : boolean {
        return this.quantity > 0
    }

}