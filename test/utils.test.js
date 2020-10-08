// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProducts } from '../products/render-products.js';
import { calcLineItem, renderLineItem } from '../cart/cart-utils.js';
import { addProduct } from '../product-entry/admin-utils.js';

const test = QUnit.test;

// {
//     id: 'jump-rope',
//     name: 'Jump Rope',
//     image: 'jump-rope.png',
//     description: 'A jump rope is all you need to get your heart rate up and work in some coordination and speed.',
//     price: 24.99,
//     category: 'cardio',
    
// },
// {
//     id: 'exercise-mat',
//     name: 'Exercise Mat',
//     image: 'exercise-mat.png',
//     description: 'No sense in getting dirty when you don\'t have to. Use this durable mat instead.',
//     price: 24.98,
//     category: 'misc',
    
// }
// ];


test('takes in an object and pushes object into an existing array and then re-saves the new array to localStorage', (expect) => {
    const new_product = [{
        id: 'barbell',
        name: 'barbell',
        image: 'barbell.png',
        description: 'Time to move some serious weight.',
        price: 229.00,
        category: 'resistance training'
    }];

    const expectation = [{
        id: 'jump-rope',
        name: 'Jump Rope',
        image: 'jump-rope.png',
        description: 'A jump rope is all you need to get your heart rate up and work in some coordination and speed.',
        price: 24.99,
        category: 'cardio',
    },
    {
        id: 'exercise-mat',
        name: 'Exercise Mat',
        image: 'exercise-mat.png',
        description: 'No sense in getting dirty when you don\'t have to. Use this durable mat instead.',
        price: 24.98,
        category: 'misc',
    },
    {
        id: 'barbell',
        name: 'barbell',
        image: 'barbell.png',
        description: 'Time to move some serious weight.',
        price: 229.00,
        category: 'resistance training'
    }];

    addProduct(new_product);

    const localStorageAfter = JSON.parse(localStorage.getItem('products'));

    expect.equal(expectation, localStorageAfter);
});





test('renders a cart line-item', (expect) => {
    //Arrange
    const cartItem = {
        id: 'foamroller',
        quantity: 2
    };
    // Set up your arguments and expectations
    const expected = '<tr><td>Foamroller</td><td>32.99</td><td>2</td><td>65.98</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderLineItem(cartItem);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});


test('when given a quantity and price should return the product of those with up to 2 decimals', (expect) => {
    //Arrange
    const quantity = 3;
    const price = 32.99;

    const expected = 98.97;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(32.99, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('renders a product', (expect) => {
    //Arrange
    const dumbbells = {
        id: 'dumbbells',
        name: 'Dumbbells',
        image: 'dumbbell.png',
        description: 'Dumbbells are essential to add-in resistance training.',
        price: 53.00,
        category: 'resistance-training',
        
    };
    // Set up your arguments and expectations
    const expected = '<li id="dumbbells"><h2 class="name">Dumbbells</h2><img src="../assets/dumbbell.png"><p class="description">Dumbbells are essential to add-in resistance training.</p><p class="price">53.00</p><p class="category">category: resistance-training</p><button value="dumbbells">Throw it in the basket!</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderProducts(dumbbells);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});
