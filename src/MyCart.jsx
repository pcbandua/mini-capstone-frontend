import { useLoaderData, useNavigate } from "react-router-dom";

import axios from "axios";

export function MyCart() {
  const cartedProducts = useLoaderData()
  console.log(cartedProducts);

  const purchase = () => {
    console.log('purchase')
    axios.post("https://localhost:3000/orders.json").then( response => {
      console.log(response.data)
      navigate(`/orders/${response.data.id}`)
    })
  }
  return (
    <div>
      <p>the items in my shopping cart</p>
      {cartedProducts.map(cp => (
        <div key={cp.id}>
          <p>Name: {cp.product.name}</p>
          <p>price: {cp.product.price}</p>
          <p>quantity: {cp.quantity}</p>
          <hr />
        </div>
      ))}
      <button onClick={purchase}>Purchase</button>
    </div>
  )

}
