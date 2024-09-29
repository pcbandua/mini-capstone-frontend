export function ProductsIndex({ products, onShow }) {
  // console.log(props.products)
  return (
    <div>
      <h1>All products</h1>
      console.log(product.url)
       {products.map((product) => (
         <div key={product.id}>
           <h2>{product.name}</h2>
           <img src={product.images[0] && product.images[0].url} />
           <p>Price: {product.price}</p>
          <button onClick={() => onShow(product)}>More Info</button>
         </div>
       ))}
</div>
    );
  }
