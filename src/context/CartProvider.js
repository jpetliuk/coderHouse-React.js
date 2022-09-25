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
    let newArray = [];
    cart.forEach((product) => {
      if (product.id === itemId) {
        console.log(product);
      } else {
        newArray.push(product);
      }
    });
    setCart(newArray);
  };

  const changeAmount = (item, amount) => {
    let index = cart.findIndex((product) => product.id === item.id);
    let newArray = cart.splice(index, 1);

    setCart(newArray);
    setCart([...cart, { ...item, amount }]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
