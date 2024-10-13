import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";


export function Header() {

  let authenticationLink
    if (localStorage.jwt === undefined){
    // logged out
    authenticationLink = (
      <>
      <Link to="/signup">Signup</Link> |
      <Link to="/login">Login</Link>
      </>
    )} else {
      authenticationLink = (
      <LogoutLink />
    )
  }


  return (
    <header>
      <nav>
      <Link to="/">Home</Link> | <Link to="/product/new">New Product</Link> | <Link to="/products"> Product</Link> | {authenticationLink}
      </nav>
    </header>
  )
}