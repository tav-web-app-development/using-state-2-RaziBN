export default function NavBar({ user, setShowForm } = false) {
  function checkoutClick() {
    console.log("The Form");
    setShowForm((i) => !i);
  }
  return (
    <div style={{ backgroundColor: "lightblue", color: "black" }}>
      {user ? (
        <span>{`Welcome ${user.firstName} ${user.lastName} `}</span>
      ) : (
        <a href="#">Login </a>
      )}
      <br />

      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      <br />
      <span>
        {user &&
          user.itemsInCart !== 0 &&
          `${user.itemsInCart} items in your cart`}
      </span>
      <br />
      <button onClick={checkoutClick}>Checkout</button>
    </div>
  );
}
