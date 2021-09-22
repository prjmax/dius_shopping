"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = __importDefault(require("./item"));
var Checkout = /** @class */ (function () {
    function Checkout(pricingRules) {
        this._pricingRules = pricingRules;
        this._items = [];
        this._discountedItems = [];
    }
    Checkout.prototype.scan = function (item, quantity) {
        if (quantity === void 0) { quantity = 1; }
        for (var index = 0; index < quantity; index++) {
            this._items.push(new item_1.default(item.sku, item.name, item.price));
        }
    };
    Checkout.prototype.total = function () {
        this._discountedItems = this._pricingRules.processDiscounts(this._items);
        var total = 0;
        this._discountedItems.forEach(function (item) {
            total = total + item.price;
            console.log(item);
        });
        console.log("*************** Total: $" + total);
    };
    return Checkout;
}());
exports.default = Checkout;
