import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomButton from '../sharing-custom.button/CustomButton'
import CartItem from '../cart-item/CartItem';

//COMES FROM SELECTOR
import { selectCardItems } from '../../redux/cart/cardSelectors'
import { createStructuredSelector } from 'reselect';
import { cartToggleHidden } from '../../redux/cart/cartActions';

import './cartDropdown.styles.scss';

const CartDropdown = ({cartItems, history, cartToggleHidden}) => {
    //console.log(cartItems);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItems.length > 0 ? 
                 cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} /> )
                : (<div className='empty-message'>Your cart is Empty</div>) 
                }
            </div>
                <CustomButton  
                    onClick={() => {
                        history.push('/checkout');
                        cartToggleHidden();
                    }}
                >Till kASSAN</CustomButton>
        </div>
    )
}

/*
const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})
*/
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCardItems
})
export default withRouter(connect(mapStateToProps, {cartToggleHidden})(CartDropdown))
