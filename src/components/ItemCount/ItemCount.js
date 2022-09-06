import { useState } from 'react';
import './ItemCount.style.css';

const ItemCount = ({ stock }) => {
    const [number, setNumber] = useState(0);
    
    const onSubtract = () => {
      if (number !== 0) {
        setNumber(number - 1);
      }
    }

    const onAdd = () => {
      if (number !== stock) {
        setNumber(number + 1);
      }
    }

  return (
    <div className='itemCount'>
      <button onClick={onSubtract}>-</button>
      <div>{number}</div>
      <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount;