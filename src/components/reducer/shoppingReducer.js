import { TYPES } from "../actions/ShoppingAction";
import axios from "axios";

export const initialState = {
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        cart: action.payload,
      };
    }

    case TYPES.ADD_TO_CART: {
      let itemInCart = state.cart.find((item) => item.id === action.payload.id);

      const agregarProducto = async (id, nombre, img, precio, quantity) => {
        await axios.post("http://localhost:5000/Carrito", {
          id: id,
          nombre: nombre,
          img: img,
          precio: precio,
          quantity: quantity,
        });
      };

      return (
        itemInCart
          ? {
              //aca va ir el metodo PUT
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, quantity: action.payload.quantity }
                  : item
              ),
            }
          : agregarProducto(
              action.payload.id,
              action.payload.nombre,
              action.payload.img,
              action.payload.precio,
              action.payload.quantity
            ),
        {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        }
      );
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.INCREMENT: {
      let updatedCart = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
      return { ...state, cart: updatedCart };
    }

    case TYPES.DECREMENT: {
      let updatedCart = state.cart
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, cart: updatedCart };
    }
    case TYPES.CLEAR_CART:
      return { cart: [] };
    default:
      return state;
  }
}
