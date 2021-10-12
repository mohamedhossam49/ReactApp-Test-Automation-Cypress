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
    cy.wait(1500)
    cy.get(productPage.totalProductsFound).then(($total) => {
        const total = $total.text()
        cy.get(productPage.filter.sizes.xl).click({timeout: 30000, force:true})
            validateUserCanFilterBySize(total)
    })
}

export const validateUserCanFilterBySize = (total: string) => {
    cy.get(productPage.totalProductsFound).should(($xlTotal) => {
        expect($xlTotal.text()).not.to.eq(total)
    })
    cy.get(productPage.totalProductsFound).should('contain.text',productPage.filter.sizes.xlValues)
}

export const filterProductsByLowestPrice = () => {
    cy.get(productPage.orderBy).select(productPage.filter.lowestPrice).should('have.value',productPage.filter.lowestText)
}

export const validateUserCanFilterByLowestPrice = () => {

}