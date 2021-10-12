
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import * as pWf from '../../../workflows/productPage';
import * as cWf from '../../../workflows/shoppingCart';

/**
 * Given methods
 */
Given('I am in react app landing page', (baseUrl) => {
    pWf.openReactApp()
});

/**
 * When methods
 */
When('I add a product to cart', () => {
    cWf.addProductToCart()
});

When('I increase a product quantity in cart', () => {
    cWf.updateProductInCart()
});

When('I remove a product from cart', () => {
    cWf.removeProductFromCart()
});

/**
 * Then methods
 */
Then('I should be able to see the different products listed', () => {
    pWf.validateUserIsInLandingPage()
});

Then('I should be able to see it in shopping cart', () => {
    cWf.validateProductIsAdded()
});

Then('I should be able to see the amount updated', () => {
    cWf.validateProductIsUpdated()
});

Then('I should not be able to see it in shopping cart', () => {
    cWf.validateProductIsDeleted()
});
