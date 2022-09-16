import "./NavBar.css";
import logo from "../../logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar-container">
      <a href="/">
        <img src={logo} className="NavBar-logo" alt="logo" />
      </a>
      <div className="NavBar-navLinks">
        <ul>
          <li>
            <NavLink
              to={"/"}
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : { color: "purple" }
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
}

export default NavBar;
