import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, amount) => {
    // if (isInCart(item.id)) {
    //   alert("ya esta en el carrito");
    // } else {
    //   setCart([...cart], { ...item, amount });
    // }
    setCart([...cart, { ...item, amount }]);
    console.log("cart", [...cart, { ...item, amount }]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
