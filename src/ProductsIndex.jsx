export function PhotosIndex({ products }) {
  return (
    <div>
      <h1>All products</h1>
       {products.map((products) => (
         <div key={product.id}>
           <h2>{product.name}</h2>
           <img src={product.url} />
           <p>Price: {product.price}</p>
          
         </div>
       ))}
</div>
    );
  }
