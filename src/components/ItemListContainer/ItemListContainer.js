import ItemCount from "./ItemCount/ItemCount";
import ItemList from "./ItemList/ItemList"
import data from './mockData/mockData'
import { useEffect, useState } from 'react'

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProducts().then((response) => setProductList(response))
      .catch((error) => console.log(error))
  }, [])

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })
  }

  return (
    <>
      <ItemList list={productList} />
      <h1>Hola</h1>
      <ItemCount stock={2} />
    </>
  )
}

export default ItemListContainer;