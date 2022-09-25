import "./ItemCount.style.css";

const ItemCount = ({ stock, count, setCount }) => {
  const decrease = () => (count > 1 ? setCount(count - 1) : null);
  const increase = () => (count < stock ? setCount(count + 1) : null);

  return (
    <div className="itemCountContainer">
      <div className="itemCount">
        <button onClick={decrease}>-</button>
        <div>{count}</div>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
