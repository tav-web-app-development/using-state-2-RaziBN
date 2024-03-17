import { useState } from "react";

export default function ProductCard({ product, setItemInCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  // const [itemsInCart, setItemsInCart] = useState(0);

  const handleAddToCartClick = () => {
    setItemInCart((i) => (i += 1));
  };
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <br />
        <button
          disabled={currentImageIndex >= product.imageUrls.length - 1}
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
        >
          Next
        </button>
        <button
          disabled={currentImageIndex <= 0}
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
        >
          Previous
        </button>
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>{showDescription ? product.description : ""}</p>
        <button
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          {showDescription ? "Hide Description " : "Show Description"}
        </button>
      </div>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>
      <br />
      {/* <span>{itemsInCart}</span>
      <br />
      <div>You order this item {itemsInCart} times</div> */}
      {!product.isInStock && "The product is out of stock"}
      <br />
    </>
  );
}
