import { useState } from "react";
export default function MyBasket(props) {
  const [cart, setCart] = useState([
    { name: "shirt", amount: 1 },
    { name: "pants", amount: 3 },
    { name: "socks", amount: 2 },
  ]);

  const cartComponents = cart.map((item) => <CartItem name={item.name} amount={item.amount} key={item.name} />);

  function addToCart() {
    setCart(
      (nextCart) =>
      //FIRST methods
      [
        ...nextCart,
        {
          name: "shoes",
          amount: 14,
        },
      ]

      //SECONDS METHOD
      //   nextCart.concat({
      //     name: "shoes",
      //     amount: 14,
      //   })
    );
  }
  return (
    <section className="myBasket">
      <p>
        Amount of Item{props.basket.length !== 1 ? "" : "s"}: {props.basket.length}
      </p>
      <button onClick={addToCart}>Buy More</button>
      <ul>{cartComponents}</ul>
    </section>
  );
}

function CartItem(props) {
  console.log(props);
  return (
    <li>
      {props.name} {props.amount}
    </li>
  );
}
