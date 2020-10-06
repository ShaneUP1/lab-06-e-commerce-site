
import { products as sourceOfTruth } from '../products/product_data.js'

export function renderLineItem(cartItem){
    const tr = document.createElement('tr');
    const itemName = document.createElement('td');
    const itemPrice = document.createElement('td');
    const itemQuantity = document.createElement('td');
    const itemSubtotal = document.createElement('td');

    itemQuantity.textContent = cartItem.quantity;

    const productData = findById(sourceOfTruth, cartItem.id);

    itemName.textContent = productData.name;
    itemPrice.textContent = productData.price;

    
    const itemCost = productData.price * cartItem.quantity;
    itemSubtotal.textContent = itemCost;

    tr.append(itemName, itemPrice, itemQuantity, itemSubtotal);

    return tr;
};


export function calcLineItem(quantity, amount) {
    const total = quantity * amount;
    return Math.round(total * 100) / 100;
}


export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const arrayItem = someArray[i];

        if (arrayItem.id === someId) {
            return arrayItem;
        }
    }
}