import Item from "./Item/Item";

const ItemList = ({ list }) => {
  return (
    <div style={{ display: "flex" }}>
      {list.map((product) => (
        <div key={product.id} style={{ padding: "15px" }}>
          <Item
            title={product.title}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
