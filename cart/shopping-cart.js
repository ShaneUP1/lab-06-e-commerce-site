import { renderLineItem } from './cart-utils.js';
import { cart } from './cart-data.js';

const shoppingList = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const dom = renderLineItem(item);
    shoppingList.appendChild(dom);
}