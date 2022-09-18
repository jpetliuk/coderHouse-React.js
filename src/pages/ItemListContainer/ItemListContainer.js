import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import "./ItemListContainer.css";
import { data } from "../../mockData";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const { categoryName } = useParams();
  let dataFiltrada = data.filter(
    (product) => product.category === categoryName
  );

  const getProducts = async () => {
    categoryName
      ? setList(dataFiltrada)
      : setTimeout(() => {
          setList(data);
        }, 2000);

    // await fetch("https://fakestoreapi.com/products", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setList(data));
  };

  useEffect(() => {
    getProducts();
  }, [categoryName]);

  return (
    <div id="itemListContainer">
      <ItemList list={list} />
    </div>
  );
};

export default ItemListContainer;
