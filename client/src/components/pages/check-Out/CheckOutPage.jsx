import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import {selectCardItems, selectCardItemsTotal } from '../../../redux/cart/cardSelectors'

import CheckOutItems from './checkout-items/CheckOutItems'
import './checkOutPage.styles.scss';
import StripePaymentsButton from '../../stripe-payment/StripePaymentsButton';


const CheckOutPage = ({cartItems, total}) => {
    return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
             <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        
        { cartItems.map(cartItem => 
            <CheckOutItems key={cartItem.id} cartItem={cartItem} />
            )}

            <div>
            </div>

        <div className='total'>TOTAL: ${total}</div>
        
        <div className='text-warning'>
            <h3 >Please use following test credit card for testing purposes</h3> 
 
             4242 4242 4242 4242 - Exp: 01/20 - CV: 123
        </div>
        <StripePaymentsButton price={total} />
    </div>
);
}

//By using createStructuredSelector not need to pass state into selector as props ex. selectCardItems(state) or selectCardItemsTotal(state)
const mapStateToProps = createStructuredSelector  ({
    cartItems: selectCardItems,
    total: selectCardItemsTotal
}) 

export default connect(mapStateToProps)( CheckOutPage);

