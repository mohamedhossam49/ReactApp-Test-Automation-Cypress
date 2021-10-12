/* eslint-disable global-require */
/// <reference types="cypress-xpath" />

import { productPage } from "../objects/productPage";
import { shoppingCart } from "../objects/shoppingCart";

export const addProductToCart = () => {
    cy.get(productPage.product.x).should('be.visible')
    cy.get(productPage.product.x).click()
}

export const updateProductInCart = () => {
    addProductToCart()
    cy.get(shoppingCart.product.incrementBtn).click()
}

export const removeProductFromCart = () => {
    addProductToCart()
    cy.get(shoppingCart.deleteBtn).click()
}

export const validateProductIsAdded = () => {
    cy.get(productPage.product.title).then(($pTitle) => {
        const pTitle = $pTitle.text()
        cy.get(shoppingCart.product.title).should(($cTitle) => {
            expect($cTitle.text()).to.eq(pTitle)
        })
    })
    cy.get(shoppingCart.product.description).should('be.visible')
    cy.get(shoppingCart.product.description).should('contain.text',shoppingCart.validation.quantity)
}

export const validateProductIsUpdated = () => {
    cy.get(shoppingCart.product.description).should('be.visible')
    cy.get(shoppingCart.product.description).should('contain.text',shoppingCart.validation.quantity2x)
}

export const validateProductIsDeleted = () => {
    cy.get(shoppingCart.emptyMessage).should('be.visible')
    cy.get(shoppingCart.emptyMessage).should('contain.text',shoppingCart.validation.emptyMessage)
}
