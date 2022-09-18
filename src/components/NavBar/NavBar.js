import "./NavBar.css";
import logo from "../../logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar-container">
      <Link to={"/"}>
        <img src={logo} className="NavBar-logo" alt="logo" />
      </Link>
      <div className="NavBar-navLinks">
        <ul>
          <li>
            <NavLink
              to={"category/heladera"}
              style={({ isActive }) => (isActive ? { color: "red" } : {})}
            >
              Heladeras
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"category/licuadora"}
              style={({ isActive }) => (isActive ? { color: "red" } : {})}
            >
              Licuadoras
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"category/lavarropas"}
              style={({ isActive }) => (isActive ? { color: "red" } : {})}
            >
              Lavarropas
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              style={({ isActive }) => (isActive ? { color: "red" } : {})}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
}

export default NavBar;
