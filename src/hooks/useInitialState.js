import { useState } from "react";

const initialState = {
  cart: [],
  aside: false,
  mobile_menu: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload)
        ? state.cart
        : [...state.cart, payload],
    });
    console.log(`state.cart`, state.cart.length);
    console.log(`payload`, payload);
  };

  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id != payload.id),
    });
    console.log(`state.cart-old`, state.cart);
    console.log(`payload-id: `, payload.id);
    console.log(`state.cart-new`, state.cart);
  };

  const stateOfAside = (payload) => {
    setState({
      ...state,
      aside: payload,
    });
    console.log(`state.aside`, state.aside);
  };

  const stateOfMobileMenu = (payload) => {
    setState({
      ...state,
      mobile_menu: payload,
    });
    console.log(`state.mobile_menu`, state.mobile_menu);
  };

  return {
    state,
    addToCart,
    removeToCart,
    stateOfAside,
    stateOfMobileMenu,
  };
};

export default useInitialState;
