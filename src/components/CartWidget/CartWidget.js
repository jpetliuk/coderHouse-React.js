import "./CartWidget.css";
import { useContext } from "react";
import cartIMG from "../../assets/img/cart-image.png";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <Link className="cartWidgetContainer" to={"/cart"}>
      <img src={cartIMG} className="cart-image" alt="cart" />
      <h4>{cart.length}</h4>
    </Link>
  );
}

export default CartWidget;
