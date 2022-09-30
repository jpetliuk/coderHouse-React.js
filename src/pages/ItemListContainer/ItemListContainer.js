import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const { categoryName } = useParams();

  const getProducts = async () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");

    await getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      let dataFiltrada = data.filter(
        (product) => product.category === categoryName
      );
      categoryName ? setList(dataFiltrada) : setList(data);
    });
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
