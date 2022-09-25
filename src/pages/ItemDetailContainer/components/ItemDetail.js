import ItemCount from "../../../components/ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({ product }) => {
  const initial = 1;

  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(initial);

  function onAdd(product) {
    addToCart(product, count);
  }
  return (
    <div className="detail-modal">
      <img className="detail-image" src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <div>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <ItemCount stock={product.stock} count={count} setCount={setCount} />
        <button onClick={() => onAdd(product)}> add to cart</button>
      </div>
    </div>
  );
};

export default ItemDetail;
