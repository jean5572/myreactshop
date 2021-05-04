import { useState } from "react";

export default function Product(props) {
  const [amount, setAmount] = useState(0);
  function clickedPlus(e) {
    console.log(props.id);
    setAmount((prevState) => prevState + 1);
  }
  function clickedMinus(e) {
    console.log(props.id);
    setAmount((prevState) => prevState - 1);
  }
  return (
    <article className={props.soldOut ? "Product soldOut" : "Product"}>
      {/* <h2>{props.title}</h2> */}
      <div className="productDetails">
        <h3>{props.productdisplayname}</h3>
        <p>ID: {props.id}</p>
        <p>PRICE: {props.price}</p>

        <button onClick={clickedPlus}>+</button>
        <p>{amount}</p>
        <button disabled={amount === 0} onClick={clickedMinus}>
          {" "}
          -{" "}
        </button>
      </div>
    </article>
  );
}
