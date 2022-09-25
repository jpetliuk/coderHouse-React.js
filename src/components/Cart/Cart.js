import "./Cart.css";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart, removeItem } = useContext(CartContext);
  console.log("cart", cart);

  const priceCalculator = () => {
    let value = 0;
    cart.forEach((element) => {
      value += element.amount * element.price;
    });
    return setTotalPrice(value);
  };

  useEffect(() => {
    priceCalculator();
  }, [cart]);

  return (
    <div className="container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <>
          <h2>No hay productos en tu carrito</h2>
          <Link to={"/"}>Volver a comprar</Link>
        </>
      ) : (
        <>
          <div className="cartContainer">
            {cart.map((item) => (
              <div className="cartItem-container" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <h3>${item.price}</h3>
                <h3>{item.amount}</h3>
                <button onClick={() => removeItem(item.id)}>
                  Eliminar producto
                </button>
              </div>
            ))}
          </div>
          <h1>${totalPrice}</h1>
        </>
      )}
    </div>
  );
};

export default Cart;
