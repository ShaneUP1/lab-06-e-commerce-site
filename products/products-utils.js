
import { findById } from '../cart/cart-utils.js';

export const CART = 'CART';

export function renderProducts(product){
    const li = document.createElement('li');
    const name = document.createElement('h2');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const category = document.createElement('p');
    const addButton = document.createElement('button');
    
    li.id = product.id;

    name.classList.add('name');
    name.textContent = product.name;

    image.src = `../assets/${product.image}`;

    description.classList.add('description');
    description.textContent = product.description;

    price.classList.add('price');
    price.textContent = `${product.price.toFixed(2)}`;

    category.classList.add('category');
    category.textContent = `category: ${product.category}`;

    addButton.value = product.id;
    addButton.textContent = 'Throw it in the basket!';
    addButton.addEventListener('click', () => {
        
        const cart = getFromLocalStorage(CART) || [];

        const cartItem = findById(cart, product.id);
        
        if (cartItem === undefined) {

            const newCartItem = {
                id: product.id,
                quantity: 1,
            };
            
            cart.push(newCartItem);
        } else {
            cartItem.quantity++;
        }

        setInLocalStorage(CART, cart);
    });

    li.appendChild(name);
    li.appendChild(image);
    li.appendChild(description);
    li.appendChild(price);
    li.appendChild(price);
    li.appendChild(category);
    li.appendChild(addButton);

    return li;

}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    
    return JSON.parse(item);
}
export function setInLocalStorage(key, value) {
        // remember, we need to stringify any values we want to set into local storage
    const stringyItem = JSON.stringify(value);
    
    localStorage.setItem(key, stringyItem);
}