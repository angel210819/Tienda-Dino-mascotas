import { createContext, useState } from "react";

export const CartContex = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContex.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
