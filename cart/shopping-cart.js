import { renderLineItem, calcOrderTotal } from './cart-utils.js';
import { cart } from './cart-data.js';
import { products } from '../products/product_data.js';

const shoppingList = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const dom = renderLineItem(item);
    shoppingList.appendChild(dom);
}

const total = calcOrderTotal(cart, products);
console.log(total);
const totalCell = document.querySelector('.total');
totalCell.textContent = `Total: $${total}`;