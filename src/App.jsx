import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsPage } from "./ProductsPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsIndex} from "./ProductsIndex";
import { MyCart } from "./MyCart";
import { Footer } from "./Footer";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/product/new",
        element: <ProductsNewPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/my_cart",
          element: <MyCart />,
          loader: () => axios.get("http://localhost:3000/orders.json").then((response) => response.data),
           },
      {
      path: "/products",
        element: <ProductsIndex />,
        loader: () => axios.get("http://localhost:3000/products.json").then((response) => response.data),
         },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;




// import { Header } from "./Header";
// import { ProductsPage } from "./ProductsPage";
// import { Footer } from "./Footer";
// import { SignupPage } from "./SignupPage";
// import { LoginPage } from "./LoginPage.jsx";
// import { LogoutLink } from "./LogoutLink.jsx";

// function App() {
//   return (
//     <div>
//       <Header />
//       <SignupPage />
//       <LoginPage />
//       <LogoutLink />
//       <ProductsPage />
//       <Footer />
//     </div>
//   )
// }

// export default App;