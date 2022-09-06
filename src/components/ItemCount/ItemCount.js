import { useState } from 'react';
import './ItemCount.style.css';

const ItemCount = ({ stock }) => {
  const [items, setItems] = useState(0);

  const onSubtract = () => items === 0 ? null : setItems(items - 1)

  const onAdd = () => items === stock ? null : setItems(items + 1)

  return (
    <div className='itemCount'>
      <button onClick={onSubtract}>-</button>
      <div>{items}</div>
      <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount;