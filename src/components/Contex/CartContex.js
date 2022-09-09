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

  const delFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  const incrementProduct = (id) => {
    dispatch({ type: TYPES.INCREMENT, payload: id });
  };
  const decrementProduct = (id) => {
    dispatch({ type: TYPES.DECREMENT, payload: id });
  };

  return (
    <CartContex.Provider
      value={{
        cart: state.cart,
        addToCart,
        delFromCart,
        clearCart,
        decrementProduct,
        incrementProduct,
      }}
    >
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
