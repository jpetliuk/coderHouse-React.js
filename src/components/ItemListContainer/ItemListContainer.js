import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  const product = { stock: 10, prodName: 'remeras' }
  console.count('render: ')

  return (
    <>
      <h1>Hola</h1>
      <ItemCount stock={product.stock} />
    </>
  )
}

export default ItemListContainer;