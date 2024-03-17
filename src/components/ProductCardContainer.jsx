import ProductCard from "./ProductCard";

export default function ProductCardContainer({ products, setItemInCart }) {
  const productsJsx = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setItemInCart={setItemInCart}
    />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
