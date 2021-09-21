class Item {
    private _sku: string;
    private _name: string;
    private _price: number;

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

    public toString() {
        return `[sku: ${this.sku}, 
                 name: ${this.name}, 
                 price: $${this.price}]`;
    }
}

class PricingRules {

}

class Checkout {
    private _pricingRules: PricingRules;
    private items: Item[];

    public constructor(pricingRules: PricingRules) {
        this._pricingRules = pricingRules;
        this.items = [];
    }

    get pricingRules() {
        return this._pricingRules;
    }
    
    public scan(item: Item, quanity: number = 1) {
        this.items.push(item);
    }

    public total() {
        this.items.forEach((element, index) => {
            console.log(`Current index: ${index}`);
            console.log(element);
        });
    }
}

const ipd:Item = new Item("ipd", "Super Ipad", 549.99);
const mbp:Item = new Item("mbp", "MacBook Pro", 1399.99);
const atv:Item = new Item("atv", "Apple TV", 109.50);
const vga:Item = new Item("VGA adapter", "Super Ipad", 30);

const pricingRules: PricingRules = new PricingRules();

const checkout: Checkout = new Checkout(pricingRules);

checkout.scan(ipd);
checkout.scan(mbp, 2);
checkout.scan(atv);
checkout.scan(vga);
checkout.scan(mbp);

checkout.total();