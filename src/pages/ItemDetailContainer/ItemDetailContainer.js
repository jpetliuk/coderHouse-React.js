import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  };

  useEffect(() => {
    console.log(id);
    getProduct();
  }, []);

  return (
    <div className="detailContainer">
      {product && <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
