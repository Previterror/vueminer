export class Upgrade {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.automatic = data.automatic
        this.price = data.price
        this.quantity = data.quantity
        this.multiplier = data.multiplier
        this.quantity = data.quantity || 0
    }
}