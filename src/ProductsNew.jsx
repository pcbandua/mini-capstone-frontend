export function ProductsNew({ onCreate }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.rest ());
  };
  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
         Image Url: <input name="url" type="text" />
        </div>
        <div>
          Price: <input name="width" type="text" />
        </div>
        <div>
          Tax: <input name="height" type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}