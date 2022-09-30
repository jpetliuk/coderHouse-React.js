import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const { categoryName } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, "items");
    const querySnapshot = categoryName
      ? query(queryBase, where("category", "==", categoryName))
      : queryBase;

    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setList(data);
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
