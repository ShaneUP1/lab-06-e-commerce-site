
import { products as hardCodedProducts } from '../products/product_data.js';

export const PRODUCTS = 'PRODUCTS';





export function addProduct(newProduct) {
    const localStorageProducts = getLocalStorageProducts();

    localStorageProducts.push(newProduct);

    const stringyLocalProducts = JSON.stringify(localStorageProducts);
    localStorage.setItem(PRODUCTS, stringyLocalProducts);
}



export function getLocalStorageProducts() {
    let localStorageProducts = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageProducts) {
        
        const stringyProducts = JSON.stringify(hardCodedProducts);

        localStorage.setItem(PRODUCTS, stringyProducts);
        localStorageProducts = hardCodedProducts;
    }
    console.log(localStorageProducts);
    return localStorageProducts;
    
}