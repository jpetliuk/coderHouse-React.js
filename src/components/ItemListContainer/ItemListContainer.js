import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  const product = {stock:10, prodName:'remeras'}

  return (
    <ItemCount stock={product.stock}/>
  )
}

export default ItemListContainer;