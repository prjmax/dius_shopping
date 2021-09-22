"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(sku, name, price) {
        this._isDiscounted = false;
        this._sku = sku;
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(Item.prototype, "sku", {
        get: function () {
            return this._sku;
        },
        set: function (sku) {
            this._sku = sku;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (p) {
            this._price = p;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "isDiscounted", {
        get: function () {
            return this._isDiscounted;
        },
        set: function (isDiscounted) {
            this._isDiscounted = isDiscounted;
        },
        enumerable: false,
        configurable: true
    });
    Item.prototype.toString = function () {
        return "[sku: " + this.sku + ", \n                 name: " + this.name + ", \n                 is Promo: " + this.isDiscounted + ", \n                 price: $" + this.price + "]";
    };
    return Item;
}());
exports.default = Item;
