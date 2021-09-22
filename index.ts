import Item from './src/item';
import { DiscountExtraItem, DiscountBulk, DiscountBundle } from './src/discount';
import PricingRules from './src/pricintRules';
import Checkout from './src/checkout';

//Init Store
const ipd:Item = new Item("ipd", "Super Ipad", 549.99);
const mbp:Item = new Item("mbp", "MacBook Pro", 1399.99);
const atv:Item = new Item("atv", "Apple TV", 109.50);
const vga:Item = new Item("vga", "VGA adapter", 30);

//Create discount deals
const pricingRules: PricingRules = new PricingRules();

const discountAtv: DiscountExtraItem = new DiscountExtraItem(atv,2,1);
pricingRules.addDiscount(discountAtv);

const discountIpd :DiscountBulk = new DiscountBulk(ipd, 4, 499.99);
pricingRules.addDiscount(discountIpd);

const discountMbp: DiscountBundle = new DiscountBundle(mbp, 1, vga);
pricingRules.addDiscount(discountMbp);



//Test Cases
const checkout1: Checkout = new Checkout(pricingRules);
checkout1.scan(atv, 3);
checkout1.scan(vga);
checkout1.total();
console.log(`************ Expected: $249`);

const checkout2: Checkout = new Checkout(pricingRules);
checkout2.scan(atv);
checkout2.scan(atv);
checkout2.scan(atv);
checkout2.scan(vga);
checkout2.total();
console.log(`************ Expected: $249`);

const checkout3: Checkout = new Checkout(pricingRules);
checkout3.scan(atv);
checkout3.scan(ipd);
checkout3.scan(ipd);
checkout3.scan(atv);
checkout3.scan(ipd);
checkout3.scan(ipd);
checkout3.scan(ipd);
checkout3.total();
console.log(`************ Expected: $2718.95`);

const checkout4: Checkout = new Checkout(pricingRules);
checkout4.scan(atv);
checkout4.scan(ipd, 2);
checkout4.scan(atv);
checkout4.scan(ipd, 3);
checkout4.total();
console.log(`************ Expected: $2718.95`);

const checkout5: Checkout = new Checkout(pricingRules);
checkout5.scan(mbp);
checkout5.scan(vga);
checkout5.scan(ipd);
checkout5.total();
console.log(`************ Expected: $1949.98`);