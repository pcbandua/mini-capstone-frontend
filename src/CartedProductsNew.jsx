import axios from "axios";
import React, { useState,useEffect } from React

export function CartedProductsNew(props) {
  const navigate = useNavigate();

  console.log(props.product)
  const handleSubmit = (event) => {
    console.log("hellooo from handleSubmit")
    event.preventDefault()
    const params = new FormData(event.target)
    axiox.post("https://localhost:3000/carted_products.json", params).then(response => {
      console.log(response.data);
      navigate('/my_cart')
    })
  }

  return(
    <><p>{props.product.name} will be added to your cart</p><p>id: {props.product.id}</p><form onSubmit={handleSubmit}>
      Quantity: <input type="text" name="quantity" />
      <input type="hidden" name="product_id" defaultValue={props.product.id} />
      <button>Add to Cart</button>
    </form></>
    </div>
  )
}

