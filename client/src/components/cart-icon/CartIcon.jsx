import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingCartItem } from '../../assets/ShoppingCartIcon.svg';
import { cartToggleHidden } from '../../redux/cart/cartActions'

//COMES FROM SELECTOR
import { selectCardItemsCount } from '../../redux/cart/cardSelectors'
import { createStructuredSelector } from 'reselect';


import './cartIcon.styles.scss';


const CartIcon = ({ cartToggleHidden, countItem }) => (
    <div className='cart-icon' onClick={() => cartToggleHidden()}>
      <ShoppingCartItem className='shopping-icon' />
      <span className='item-count'>{countItem}</span>
    </div>
  );

/* THIS IS SAME AS BELOW CODE USING SELECTOR
  const mapStateToProps = state => ({
    //Adding together all items using reduce func
   // countItem: state.cart.cartItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
   countItem: selectCardItemsCount(state)
})
*/
const mapStateToProps = createStructuredSelector({
  countItem: selectCardItemsCount
}) 

  export default connect(mapStateToProps,{cartToggleHidden}) (CartIcon);