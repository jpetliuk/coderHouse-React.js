import "./Cart.css";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart, removeItem } = useContext(CartContext);
  console.log("cart", cart);

  const createOrder = () => {
    const db = getFirestore();
    const order = {
      buyer: {
        name: "Juan",
        phone: "112233455",
        email: "juan@test.com",
      },
      items: cart,
      total: totalPrice,
      date: new Date(),
    };
    const query = collection(db, "orders");
    addDoc(query, order)
      .then((response) => {
        console.log(response);
        alert("Compra exitosa");
      })
      .catch(() => alert("La compra no pudo ser completada"));
  };

  const priceCalculator = () => {
    let total = cart.reduce((a, b) => a + b.price * b.amount, 0);
    return setTotalPrice(total);
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
          <button onClick={() => createOrder()}>realizar compra</button>
        </>
      )}
    </div>
  );
};

export default Cart;
