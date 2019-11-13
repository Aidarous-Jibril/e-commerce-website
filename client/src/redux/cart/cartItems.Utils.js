  
//FOR INCREASING ITEM QUANTITY
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //check if cart item to add exists already
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    //if the cart item to add exists just increase the quantity
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    //return cartitems plus the new cartItemToAdd with qnty 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };


//FOR REMOVING ITEM
  //for removing item
  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
      //filter out cart item ro remove
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    //if the cart item to remove exists just deccrease the quantity
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };