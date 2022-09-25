import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, amount) => {
    isInCart(item.id)
      ? alert("ya esta en el carrito")
      : setCart([...cart, { ...item, amount }]);

    console.log("cart", [...cart, { ...item, amount }]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
