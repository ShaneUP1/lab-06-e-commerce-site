import { renderLineItem, calcOrderTotal } from './cart-utils.js';
import { CART, getFromLocalStorage } from '../products/products-utils.js';
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

const total = calcOrderTotal(cart, products).toFixed(2);
const totalCell = document.querySelector('.total');
totalCell.textContent = `Total: $${total}`;

button.addEventListener('click', () => {
    const inYourCart = JSON.stringify(cart, true, 2);
    alert (inYourCart);

    localStorage.clear();
    window.location.href = '/';
});