/* eslint-disable no-param-reassign */

export const shoppingCart = {
    product:{
        title:'.shelf-item__details > .title',
        description:'.desc',
        incrementBtn:'.float-cart__shelf-container > .shelf-item > .shelf-item__price > div > :nth-child(2)',
        decrementBtn: '.float-cart__shelf-container > .shelf-item > .shelf-item__price > div > :nth-child(1)'
    },
    deleteBtn:'.shelf-item__del',
    subTotal:'.sub-price__val',
    emptyMessage:'.shelf-empty',
    validation:{
    emptyMessage:'Add some products in the cart',
    quantity:'Quantity: 1',
    quantity2x:'Quantity: 2'
    }
}
