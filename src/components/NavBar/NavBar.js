import "./NavBar.style.css";
import logo from "../../logo.svg";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="NavBar-container">
      <a href="/">
        <img src={logo} className="NavBar-logo" alt="logo" />
      </a>
      <div className="NavBar-navLinks">
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">cars</a>
          </li>
          <li>
            <a href="/">rockets</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
}

export default NavBar;
