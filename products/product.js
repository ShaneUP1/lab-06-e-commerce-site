import { localStorageProducts } from '../product-entry/admin-utils.js';
import { renderProducts } from './products-utils.js';

const list = document.getElementById('products');

for (let i = 0; i < localStorageProducts.length; i++) {
    const product = localStorageProducts[i];
    const dom = renderProducts(product);
    list.appendChild(dom);
}