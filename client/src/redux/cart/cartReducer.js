import { 
    TOGGLE_CART_HIDDEN,
    ADD_ITEM ,
    DELETE_ITEM,
    REMOVE_ITEM, 
    CLEAR_ITEMS_FROM_CART
    } from "../actions/types"

    //import carItemUtils func
    import { addItemToCart, removeItemFromCart } from './cartItems.Utils'
    
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case ADD_ITEM:
                return {
                    ...state,
                    //addItemToCart func comes from cartItems.utils file
                    cartItems: addItemToCart( state.cartItems, action.payload), 
                    loading: false
                };
            case DELETE_ITEM:
                return{
                    ...state,
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                }
            case REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
                    };    
            case CLEAR_ITEMS_FROM_CART:
                return {
                    ...state,
                    cartItems: []
                }    
             default: 
                 {
                return state
              }    
    }
}

export default cartReducer;