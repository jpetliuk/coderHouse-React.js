import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./components/ItemDetail";
import { useParams } from "react-router-dom";
import { data } from "../../mockData";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [items, setItems] = useState(0);
  let navigate = useNavigate();

  const getProduct = async () => {
    await setTimeout(() => {
      const dataFiltrada = data.filter((product) => product.id === id);
      // console.log(...dataFiltrada);
      setProduct(...dataFiltrada);
    }, 1000);

    // await fetch(`https://fakestoreapi.com/products/${id}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    // },
    // })
    // .then((response) => response.json())
    // .then((product) => {
    //   console.log(product);
    //   setProduct(product);
    // });
  };

  useEffect(() => {
    // console.log(id);
    getProduct();
  }, []);

  const handleClick = () => {
    console.log(items);
    navigate("/cart");
  };

  return (
    <div className="detailContainer">
      {product && <ItemDetail product={product} />}
      <ItemCount
        items={items}
        setItems={setItems}
        stock={product && product.stock}
      />
      <button onClick={handleClick}>ir al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
