import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  const product = {stock:10, prodName:'remeras'}

  const [items, setItems] = useState(0);

  const onSubtract = () => items > 0 ? setItems(items - 1) : null
  const onAdd = () => items < product.stock ? setItems(items + 1) : null

  return (
    <ItemCount items={items} onAdd={onAdd} onSubtract={onSubtract}/>
  )
}

export default ItemListContainer;