import Product from "./Product";

export default function ProductList(props) {
  const productsComponents = props.products.map((item) => <Product {...item} key={item.id} />);
  return (
    <main className="productList">
      {productsComponents}
      {/* <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} /> */}
    </main>
  );
}
