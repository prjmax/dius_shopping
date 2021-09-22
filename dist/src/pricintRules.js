"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PricingRules = /** @class */ (function () {
    function PricingRules() {
        this._discounts = [];
    }
    PricingRules.prototype.addDiscount = function (discount) {
        this._discounts.push(discount);
    };
    PricingRules.prototype.processDiscounts = function (items) {
        this._discounts.forEach(function (discount) {
            items = discount.applyDiscount(items);
        });
        return items;
    };
    return PricingRules;
}());
exports.default = PricingRules;
