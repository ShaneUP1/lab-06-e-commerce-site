import { addProduct } from './admin-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const description = data.get('description');
    const price = data.get('price');
    const category = data.get('category');

    const newProduct = {
        id: id,
        name: name,
        image: image,
        description: description,
        price: Number(price),
        category: category,
    };
    addProduct(newProduct);
    form.reset();
});