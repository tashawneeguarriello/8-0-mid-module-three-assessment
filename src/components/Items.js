function Items({ name, price, img, description }) {
  return (
    <div className="products">
      <h2>{name} </h2>
      <p>{price}</p>
      <button>Add to Cart</button>
      <img src={img} alt="Item for Sale" />
      <p>{description}</p>
    </div>
  );
}

export default Items;
