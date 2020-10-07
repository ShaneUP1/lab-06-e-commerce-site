// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProducts } from '../products/render-products.js';
import { calcLineItem, renderLineItem } from '../cart/cart-utils.js';


const test = QUnit.test;

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
