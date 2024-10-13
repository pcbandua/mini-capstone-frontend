import { useState } from "react";

export function ProductsIndex({ products, onShow }) {

  const [searchFilter, setSearchFilter] = useState("")

  // console.log(props.products)
  return (
    <div id="products-index">
      <h1>Wired Magazine Must Haves</h1>
      <p>Search: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} /></p>
      
      <h3>Product Search</h3>
      {/* console.log(product.url) */}
       
       {products.filter((post) => post.name.toLowerCase().includes(searchFilter.toLowerCase())).map((product) => (
         <div key={product.id}>
           <h2>{product.name}</h2>
           <img src={product.images[0] && product.images[0].url} />
           <p>${product.price}</p>
          <button onClick={() => onShow(product)}>More Info</button>
         </div>
       ))}
</div>
    );
  }
