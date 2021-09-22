class Item {
    private _sku: string;
    private _name: string;
    private _price: number;
    private _isDiscounted: boolean = false;

    public constructor(sku: string, name: string, price: number) {
        this._sku = sku;
        this._name = name;
        this._price = price;
    }

    get sku() {
        return this._sku;
    }
    set sku(sku: string) {
        this._sku = sku;
    }
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get price() {
        return this._price;
    }
    set price(p: number) {
        this._price = p;
    }
    get isDiscounted() {
        return this._isDiscounted;
    }
    set isDiscounted(isDiscounted: boolean) {
        this._isDiscounted = isDiscounted;
    }

    public toString() {
        return `[sku: ${this.sku}, 
                 name: ${this.name}, 
                 is Promo: ${this.isDiscounted}, 
                 price: $${this.price}]`;
    }
}

export default Item;