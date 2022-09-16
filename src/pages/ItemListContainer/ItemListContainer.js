import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setList(data));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div id="itemListContainer">
      <ItemList list={list} />
    </div>
  );
};

export default ItemListContainer;
