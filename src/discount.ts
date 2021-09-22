import Item from './item';

abstract class Discount {
    private _itemWithDiscount: Item;

    constructor(itemWithDiscount: Item) {
        this._itemWithDiscount = itemWithDiscount;
    }

    get itemWithDiscount(){
        return this._itemWithDiscount;
    }
    set itemWithDiscount(item:Item) {
        this._itemWithDiscount = item;
    }
}
export class DiscountExtraItem extends Discount {
    private _numberOfItems: number;
    private _numberOfFreeItems: number;

    public constructor(itemWithDiscount: Item, numberOfItems: number, numberOfFreeItems: number) {
        super(itemWithDiscount);
        this._numberOfItems = numberOfItems;
        this._numberOfFreeItems = numberOfFreeItems;
    }

    public applyDiscount(items: Item[]) {
        // Validate if the discounts applies
        var discountedItemsInCheckout = 0;
        items.forEach((item) => {
            if (!item.isDiscounted && item.sku == this.itemWithDiscount.sku) {
                discountedItemsInCheckout ++;
            }
        });
        if (discountedItemsInCheckout > this._numberOfItems) {
            var discountedItemsProccesed = 0;
            items.forEach((item, index) => {
                // Validates that the item is not already discounted and the checkout contains the required amount of items
                if (!item.isDiscounted && item.sku == this.itemWithDiscount.sku && discountedItemsProccesed < this._numberOfFreeItems) {
                    item.price = 0;
                    item.isDiscounted = true;
                    discountedItemsProccesed++;
                }
            });
        }
        return items;
    }
}

export class DiscountBulk extends Discount {
    private _numberOfItems: number;
    private _discountedPrice: number;

    public constructor(itemWithDiscount: Item, numberOfItems: number, discountedPrice: number) {
        super(itemWithDiscount);
        this._numberOfItems = numberOfItems;
        this._discountedPrice = discountedPrice;
    }

    public applyDiscount(items: Item[]) {
        // Validate if the discounts applies
        var discountedItemsInCheckout = 0;
        items.forEach((item) => {
            if (!item.isDiscounted && item.sku == this.itemWithDiscount.sku) {
                discountedItemsInCheckout ++;
            }
        });
        if (discountedItemsInCheckout > this._numberOfItems) {
            items.forEach((item) => {
                // Validates that the item is not already discounted
                if (!item.isDiscounted && item.sku == this.itemWithDiscount.sku) {
                    item.price = this._discountedPrice;
                    item.isDiscounted = true;
                }
            });
        }
        return items;
    }
}

export class DiscountBundle extends Discount {
    private _numberOfItems: number;
    private _freeItem: Item;

    public constructor(itemWithDiscount: Item, numberOfItems: number, freeItem: Item) {
        super(itemWithDiscount);
        this._numberOfItems = numberOfItems;
        this._freeItem = freeItem;
    }

    public applyDiscount(items: Item[]) {
        // Validate if the discounts applies
        var discountedItemsInCheckout = 0;
        items.forEach((item) => {
            if (!item.isDiscounted && item.sku == this.itemWithDiscount.sku) {
                discountedItemsInCheckout ++;
            }
        });
        if (discountedItemsInCheckout >= this._numberOfItems) {
            var existingItem = false;
            // If the free bundle Item is in checkout, reduce the price to 0
            items.forEach((item) => {
                // Validates that the item is not already discounted 
                if (!item.isDiscounted && item.sku == this._freeItem.sku) {
                    item.price = 0;
                    item.isDiscounted = true;
                    existingItem = true;
                }
            });
            // If the free bundle Item is not in checkout, add it for free
            if (!existingItem) {
                this._freeItem.price = 0;
                this._freeItem.isDiscounted = true;
                items.push(this._freeItem);
            }
        }
        return items;
    }
}
