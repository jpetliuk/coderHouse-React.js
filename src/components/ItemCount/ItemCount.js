import "./ItemCount.style.css";

const ItemCount = ({ items, setItems, stock }) => {
  const onSubtract = () => (items > 0 ? setItems(items - 1) : null);
  const onAdd = () => (items < stock ? setItems(items + 1) : null);

  return (
    <div className="itemCountContainer">
      <div className="itemCount">
        <button onClick={onSubtract}>-</button>
        <div>{items}</div>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
