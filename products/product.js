import { products } from './product_data.js';
import { renderProducts } from './render-products.js';

const list = document.getElementById('products');

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const dom = renderProducts(product);
    list.appendChild(dom);
}