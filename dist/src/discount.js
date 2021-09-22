"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountBundle = exports.DiscountBulk = exports.DiscountExtraItem = void 0;
var Discount = /** @class */ (function () {
    function Discount(itemWithDiscount) {
        this._itemWithDiscount = itemWithDiscount;
    }
    Object.defineProperty(Discount.prototype, "itemWithDiscount", {
        get: function () {
            return this._itemWithDiscount;
        },
        set: function (item) {
            this._itemWithDiscount = item;
        },
        enumerable: false,
        configurable: true
    });
    return Discount;
}());
var DiscountExtraItem = /** @class */ (function (_super) {
    __extends(DiscountExtraItem, _super);
    function DiscountExtraItem(itemWithDiscount, numberOfItems, numberOfFreeItems) {
        var _this = _super.call(this, itemWithDiscount) || this;
        _this._numberOfItems = numberOfItems;
        _this._numberOfFreeItems = numberOfFreeItems;
        return _this;
    }
    DiscountExtraItem.prototype.applyDiscount = function (items) {
        var _this = this;
        // Validate if the discounts applies
        var discountedItemsInCheckout = 0;
        items.forEach(function (item) {
            if (!item.isDiscounted && item.sku == _this.itemWithDiscount.sku) {
                discountedItemsInCheckout++;
            }
        });
        if (discountedItemsInCheckout > this._numberOfItems) {
            var discountedItemsProccesed = 0;
            items.forEach(function (item, index) {
                // Validates that the item is not already discounted and the checkout contains the required amount of items
                if (!item.isDiscounted && item.sku == _this.itemWithDiscount.sku && discountedItemsProccesed < _this._numberOfFreeItems) {
                    item.price = 0;
                    item.isDiscounted = true;
                    discountedItemsProccesed++;
                }
            });
        }
        return items;
    };
    return DiscountExtraItem;
}(Discount));
exports.DiscountExtraItem = DiscountExtraItem;
var DiscountBulk = /** @class */ (function (_super) {
    __extends(DiscountBulk, _super);
    function DiscountBulk(itemWithDiscount, numberOfItems, discountedPrice) {
        var _this = _super.call(this, itemWithDiscount) || this;
        _this._numberOfItems = numberOfItems;
        _this._discountedPrice = discountedPrice;
        return _this;
    }
    DiscountBulk.prototype.applyDiscount = function (items) {
        var _this = this;
        // Validate if the discounts applies
        var discountedItemsInCheckout = 0;
        items.forEach(function (item) {
            if (!item.isDiscounted && item.sku == _this.itemWithDiscount.sku) {
                discountedItemsInCheckout++;
            }
        });
        if (discountedItemsInCheckout > this._numberOfItems) {
            items.forEach(function (item) {
                // Validates that the item is not already discounted
                if (!item.isDiscounted && item.sku == _this.itemWithDiscount.sku) {
                    item.price = _this._discountedPrice;
                    item.isDiscounted = true;
                }
            });
        }
        return items;
    };
    return DiscountBulk;
}(Discount));
exports.DiscountBulk = DiscountBulk;
var DiscountBundle = /** @class */ (function (_super) {
    __extends(DiscountBundle, _super);
    function DiscountBundle(itemWithDiscount, numberOfItems, freeItem) {
        var _this = _super.call(this, itemWithDiscount) || this;
        _this._numberOfItems = numberOfItems;
        _this._freeItem = freeItem;
        return _this;
    }
    DiscountBundle.prototype.applyDiscount = function (items) {
        var _this = this;
        // Validate if the discounts applies
        var discountedItemsInCheckout = 0;
        items.forEach(function (item) {
            if (!item.isDiscounted && item.sku == _this.itemWithDiscount.sku) {
                discountedItemsInCheckout++;
            }
        });
        if (discountedItemsInCheckout >= this._numberOfItems) {
            var existingItem = false;
            // If the free bundle Item is in checkout, reduce the price to 0
            items.forEach(function (item) {
                // Validates that the item is not already discounted 
                if (!item.isDiscounted && item.sku == _this._freeItem.sku) {
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
    };
    return DiscountBundle;
}(Discount));
exports.DiscountBundle = DiscountBundle;
