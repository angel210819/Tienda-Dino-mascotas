import { createContext, useReducer } from "react";

import shoppingReducer from "../../reducer/shoppingReducer";
import { TYPES } from "../../actions/ShoppingAction";

export const CartContex = createContext([]);

const initialState = {
  cart: [],
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const addToCart = (producto) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: producto });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <CartContex.Provider
      value={{ cart: state.cart, addToCart, delFromCart, clearCart }}
    >
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
