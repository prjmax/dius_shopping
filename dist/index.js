"use strict";
var Item = /** @class */ (function () {
    function Item(sku, name, price) {
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
    Item.prototype.toString = function () {
        return "[sku: " + this.sku + ", \n                 name: " + this.name + ", \n                 price: $" + this.price + "]";
    };
    return Item;
}());
var PricingRules = /** @class */ (function () {
    function PricingRules() {
    }
    return PricingRules;
}());
var Checkout = /** @class */ (function () {
    function Checkout(pricingRules) {
        this._pricingRules = pricingRules;
        this.items = [];
    }
    Object.defineProperty(Checkout.prototype, "pricingRules", {
        get: function () {
            return this._pricingRules;
        },
        enumerable: false,
        configurable: true
    });
    Checkout.prototype.scan = function (item, quanity) {
        if (quanity === void 0) { quanity = 1; }
        this.items.push(item);
    };
    Checkout.prototype.total = function () {
        this.items.forEach(function (element, index) {
            console.log("Current index: " + index);
            console.log(element);
        });
    };
    return Checkout;
}());
var ipd = new Item("ipd", "Super Ipad", 549.99);
var mbp = new Item("mbp", "MacBook Pro", 1399.99);
var atv = new Item("atv", "Apple TV", 109.50);
var vga = new Item("VGA adapter", "Super Ipad", 30);
var pricingRules = new PricingRules();
var checkout = new Checkout(pricingRules);
checkout.scan(ipd);
checkout.scan(mbp, 2);
checkout.scan(atv);
checkout.scan(vga);
checkout.scan(mbp);
checkout.total();
