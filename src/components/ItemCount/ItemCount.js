import { useState } from 'react';
import './ItemCount.style.css';

const ItemCount = ({ stock }) => {
  const [items, setItems] = useState(0);

  const onSubtract = () => items > 0 ? setItems(items - 1) : null

  const onAdd = () => items < stock ? setItems(items + 1) : null

  return (
    <div className='itemCount'>
      <button onClick={onSubtract}>-</button>
      <div>{items}</div>
      <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount;