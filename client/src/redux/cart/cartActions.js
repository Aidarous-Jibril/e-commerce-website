import { 
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    DELETE_ITEM,
    REMOVE_ITEM,
    CLEAR_ITEMS_FROM_CART
} from "../actions/types"


// Set loading to true
export const cartToggleHidden = () => {
    return {
      type: TOGGLE_CART_HIDDEN
    };
  };

//Add item to cart
export const addItem = item  => ({
        type: ADD_ITEM,
        payload: item
})
//Delete item from cartItems
export const deleteItemsFromCart = item  => ({
  type:DELETE_ITEM,
  payload: item
})

//Remove item from cartItems
export const removeItemFromCart = item  => ({
  type:REMOVE_ITEM,
  payload: item
})

//Clear cart Items when user sings out
export const clearCartItems = () => {
  return {
    type: CLEAR_ITEMS_FROM_CART
  }
}