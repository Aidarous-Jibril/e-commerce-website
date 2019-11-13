import  { createSelector } from 'reselect';

//TWO TYPES OF SELECTOR FOR MEMOIZATION VALUE
//this is input selector, it not uses state, it gives back a piece of state
const selectCard = state => state.cart;

export const selectCardItems =  createSelector(
    [selectCard],
    cart => cart.cartItems
);

//this is output selector, it uses input selector & create selector to build themselves
export const selectCardItemsCount = createSelector(
    [selectCardItems],
    cartItems => cartItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
) 

export const selectCardItemsTotal = createSelector(
    [selectCardItems],
    cartItems => cartItems.reduce((total, cardItem) => total + cardItem.quantity * cardItem.price, 0)
) 
