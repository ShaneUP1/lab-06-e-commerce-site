
import { products as hardCodedProducts } from '../products/product_data.js';

export const PRODUCTS = 'PRODUCTS';

export function getLocalStorageProducts() {
    let localStorageProducts = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageProducts) {
        
        const stringyProducts = JSON.stringify(hardCodedProducts);

        localStorage.setItem(PRODUCTS, stringyProducts);
        localStorageProducts = hardCodedProducts;
    }
    return localStorageProducts;
}