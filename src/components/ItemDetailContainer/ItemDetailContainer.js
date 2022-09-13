import { useEffect, useState } from "react";
import data from "../../mockData";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [itemDescription, setItemDescription] = useState([]);

  useEffect(() => {
    getItem()
      .then((response) => {
        setItemDescription(response[1]);
      })
      .catch((error) => console.log(error));
  }, []);

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  return (
    <div>
      <ItemDetail
        title={itemDescription.title}
        price={itemDescription.price}
        image={itemDescription.image}
        description={itemDescription.description}
      />
    </div>
  );
};

export default ItemDetailContainer;
