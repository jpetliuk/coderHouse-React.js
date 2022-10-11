import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, amount) => {
    isInCart(item.id)
      ? changeAmount(item, amount)
      : setCart([...cart, { ...item, amount }]);

    console.log("cart", [...cart, { ...item, amount }]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const changeAmount = (item, amount) => {
    const index = cart.findIndex((product) => product.id === item.id);

    setCart(cart.splice(index, 1));
    setCart([...cart, { ...item, amount }]);
  };

  return (
    <CartContext.Provider value={{ cart, clear, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
