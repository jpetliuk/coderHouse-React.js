import './ItemCount.style.css';

const ItemCount = ({ items, onAdd, onSubtract }) => {
  return (
    <div className='itemCount'>
      <button onClick={onSubtract}>-</button>
      <div>{items}</div>
      <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount;