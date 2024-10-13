import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({})

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreate = (params,successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  }

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleUpdate = (id, params, successCallback) => {
    console.log("handleUpdate", params);
    axios.put(`http://localhost:3000/products/${id}.json`, params).then((response) => {
      setProducts(
        products.map((product) => {
        if(product.id===response.data.id){
          return response.data;}
          else {
            return product;
          }
      })
    );
    successCallback();
    handleClose();
  });
}

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false)
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/products/${id}.json`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
      handleClose();
    })
  }; 

  useEffect(handleIndex, []);

  return (
    <main>
    
      {/* <ProductsNew onCreate={handleCreate}/> */}
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
      </Modal>
    </main>
  );
}