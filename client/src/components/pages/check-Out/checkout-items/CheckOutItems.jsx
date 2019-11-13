import React from 'react'
import { connect } from 'react-redux';

import { deleteItemsFromCart, removeItemFromCart, addItem } from '../../../../redux/cart/cartActions'
import './checkOutItems.styles.scss';

const CheckOutItems = ({cartItem, deleteItems, removeItem, addItem }) => {
    //dextructure from cartItem props
    const { imageUrl, name, quantity, price} = cartItem
    return (
        <div className='checkout-items'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>
                     &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </div>
            <div className='price'>{price}</div>
            <div className='remove' onClick={() => deleteItems(cartItem)}>&#10005;</div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    deleteItems: item => dispatch(deleteItemsFromCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item))
  });

export default connect(null, mapDispatchToProps)(CheckOutItems)
