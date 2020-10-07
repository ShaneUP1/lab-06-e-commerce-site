import { renderLineItem, calcOrderTotal } from './cart-utils.js';
import { CART, getFromLocalStorage } from '../products/render-products.js';
import { products } from '../products/product_data.js';

const shoppingList = document.querySelector('tbody');
const button = document.querySelector('#place-order');
const cart = getFromLocalStorage(CART) || [];

if (cart.length === 0) {
    button.disabled = true;
}

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const dom = renderLineItem(item);
    shoppingList.appendChild(dom);
}

const total = calcOrderTotal(cart, products);
const totalCell = document.querySelector('.total');
totalCell.textContent = `Total: $${total}`;