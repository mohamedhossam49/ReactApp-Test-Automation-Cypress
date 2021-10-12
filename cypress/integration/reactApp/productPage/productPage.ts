
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import * as pWf from '../../../workflows/productPage';

/**
 * Given methods
 */
Given('I am in react app landing page', (baseUrl) => {
    pWf.openReactApp()
});

/**
 * When methods
 */
When('I filter products by XL size', () => {
    pWf.filterProductsBySize()
});

When('I filter products by lowest price', () => {
    pWf.filterProductsByLowestPrice()
});

/**
 * Then methods
 */
Then('I should be able to see the different products listed', () => {
    pWf.validateUserIsInLandingPage()
});

Then('I should be able to see products listed by specified size', (total: string) => {
    pWf.validateUserCanFilterBySize(total)
});

Then('I should be able to see products listed by lowest price', () => {
    pWf.validateUserCanFilterByLowestPrice()
});
