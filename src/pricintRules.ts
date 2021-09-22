import Item from './item';
import {DiscountExtraItem, DiscountBulk, DiscountBundle} from './discount';

export default class PricingRules {
    private _discounts: Array<DiscountExtraItem|DiscountBulk|DiscountBundle>;
    
    public constructor() {
        this._discounts = [];
    }
    
    public addDiscount(discount: DiscountExtraItem|DiscountBulk|DiscountBundle){
        this._discounts.push(discount);
    }

    public processDiscounts(items: Array<Item>) {
        this._discounts.forEach((discount) => {
            items = discount.applyDiscount(items);
        });
        return items;
    }
}