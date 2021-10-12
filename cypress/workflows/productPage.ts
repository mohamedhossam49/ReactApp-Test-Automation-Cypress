/* eslint-disable global-require */
/// <reference types="cypress-xpath" />

import { productPage } from "../objects/productPage";
import {ignoreUncaughtException} from "../support/commands"
import { getProperties, goToApp } from "./general";

export const openReactApp = () => { 
    const loadData = getProperties();
    goToApp(loadData.baseUrl);
    ignoreUncaughtException()
}

export const validateUserIsInLandingPage = () => {
    cy.get(productPage.totalProductsFound).should('be.visible')
    cy.get(productPage.cartBtn).should('be.visible')
}

export const filterProductsBySize = () => {
    cy.get(productPage.totalProductsFound).then(($total) => {
        const total = $total.text()
        cy.wait(2000)
        cy.get(productPage.sizes.xl).click()
        cy.wait(2000)
            validateProductsFilterBySize(total)
    })  
}

export const validateProductsFilterBySize = (total: string) => {
    cy.get(productPage.totalProductsFound).then(($xlTotal) => {
        expect($xlTotal.text()).not.to.eq(total)
})
}
