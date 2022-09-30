import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./components/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const db = getFirestore();
    const queryDoc = doc(db, "items", id);

    await getDoc(queryDoc).then((response) => {
      console.log(response.id);
      console.log(response.data());
      setProduct({ id: response.id, ...response.data() });
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="detailContainer">
      {product && <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
