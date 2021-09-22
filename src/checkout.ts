import Item from './item';
import PricingRules from './pricintRules';

export default class Checkout {
    private _pricingRules: PricingRules;
    private _items: Item[];
    private _discountedItems: Item[];

    public constructor(pricingRules: PricingRules) {
        this._pricingRules = pricingRules;
        this._items = [];
        this._discountedItems = [];
    }
    
    public scan(item: Item, quantity: number = 1) {
        for (let index = 0; index < quantity; index++) {
            this._items.push(new Item(item.sku, item.name, item.price));          
        }        
    }

    public total() {
        this._discountedItems = this._pricingRules.processDiscounts(this._items);
        var total = 0;
        this._discountedItems.forEach((item) => {
            total = total + item.price; 
            console.log(item);
        });
        console.log(`*************** Total: $${total}`);
    }
}