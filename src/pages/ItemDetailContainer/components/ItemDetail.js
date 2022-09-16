const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div className="detail-modal">
      <img className="detail-image" src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <div>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
