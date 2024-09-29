export function ProductsShow({ product, onUpdate }) {

  const handleSubmit = (event) => {
         event.preventDefault();
         const params = new FormData(event.target);
         onUpdate(product.id, params, () => event.target.reset());
       };
  return (
    <><div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>Image Url: {product.url}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
    <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={product.name} name="name" type="text" />
        </div>
        <div>
          Image Url: <input defaultValue={product.url} name="image url" type="text" />
        </div>
        <div>
          Price: <input defaultValue={product.price} name="price" type="text" />
        </div>
        <div>
          Description: <input defaultValue={product.description} name="description" type="text" />
        </div>
        <button type = "submit">Update</button>
    </form></>

  );
}