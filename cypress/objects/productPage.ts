/* eslint-disable no-param-reassign */

export const productPage = {
    totalProductsFound:'.products-found > span',
    cartBtn:'.bag--float-cart-closed',
    orderBy:'select',
    filter:{
        sizes:{
            xl:':nth-child(7) > label > .checkmark', 
            xlValues: '10'
        },
        lowestPrice:'Lowest to highest',
        lowestText:'lowestprice'
    },
    product:{
        x:'[data-sku="12064273040195392"] > .shelf-item__buy-btn',
        title:'[data-sku="12064273040195392"] > .shelf-item__title'
    }
}
