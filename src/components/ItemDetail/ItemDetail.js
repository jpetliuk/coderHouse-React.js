const ItemDetail = ({ title, price, image, description }) => {
  return (
    <>
      <img width={"200px"} src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
    </>
  );
};

export default ItemDetail;
