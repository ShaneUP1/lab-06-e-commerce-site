import { PRODUCTS, getLocalStorageProducts } from '../product-entry/admin-utils.js';
import { renderProducts } from './products-utils.js';

const productsInLocalStorage = getLocalStorageProducts(PRODUCTS);
console.log(productsInLocalStorage);
const list = document.getElementById('products');


for (let i = 0; i < productsInLocalStorage.length; i++) {
    const product = productsInLocalStorage[i];
    const dom = renderProducts(product);
    list.appendChild(dom);
}