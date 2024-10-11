import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ProductsNewPage() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log ('handling Submit')
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/products.json', params).then(response => {
      console.log(response.data)
      navigate('/');
    })
  
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
          Price: <input name="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Supplier ID: <input name="supplier_id" type="text" />
        </div>
        <button type="submit">Create New Product</button>
      </form>
    </div>
  );
}