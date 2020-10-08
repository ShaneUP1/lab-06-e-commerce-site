import { renderLineItem, calcOrderTotal } from './cart-utils.js';
import { CART, getFromLocalStorage } from '../products/products-utils.js';
import { PRODUCTS, getLocalStorageProducts } from '../product-entry/admin-utils.js';

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

const productArray = getLocalStorageProducts(PRODUCTS);

const total = calcOrderTotal(cart, productArray).toFixed(2);
console.log(total);
const totalCell = document.querySelector('.total');
totalCell.textContent = `Total: $${total}`;

button.addEventListener('click', () => {
    const inYourCart = JSON.stringify(cart, true, 2);
    alert (inYourCart);

    localStorage.clear();
    window.location.href = '/';
});