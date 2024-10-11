import { Link } from "react-router-dom";


export function Header() {
  return (
    <header>
      <nav>
      <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>  | <Link to="/product/new">New Product</Link> | <Link to="/products"> Product</Link>
      </nav>
    </header>
  )
}

// export function Header() {
//   return (
//     <header>
//       <nav>
//         <a href="#">Home</a> | <a href="#">Link</a>
//       </nav>
//     </header>
//   )
// }