import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ list }) => {
  return (
    <div className="itemList">
      {list.map((item) => (
        <Link
          key={item.id}
          to={`/details${item.id}`}
          className="item-container-link"
        >
          <Item
            title={item.title}
            price={item.price}
            category={item.category}
            description={item.description}
            image={item.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
