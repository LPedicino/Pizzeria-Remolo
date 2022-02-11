import "bootstrap/dist/css/bootstrap.min.css";

import Dropdown from "react-bootstrap/Dropdown";

import "./navBar.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <>
      <nav class="navbar">
        <div class="brand-title">Pizzeria Don Remolo</div>
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div class="navbar-links">
          <ul>
            <li>
              <a href="../../../public/index.html">Menú</a>
            </li>
            <li>
              <a href="../../../public/index.html">Cart</a>
            </li>
            <li>
              <a href="../../../public/index.html">About Us</a>
            </li>
          </ul>
        </div>
        <Dropdown variant="warning">
          <Dropdown.Toggle className="menu">Menu</Dropdown.Toggle>

          <Dropdown.Menu className="menu-drop">
            <Dropdown.Item className="menu-item" href="#/action-1">
              Home
            </Dropdown.Item>
            <Dropdown.Item className="menu-item" href="#/action-2">
              Menú
            </Dropdown.Item>
            <Dropdown.Item className="menu-item" href="#/action-3">
              Cart
            </Dropdown.Item>
            <Dropdown.Item className="menu-item" href="#/action-4">
              About us
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </>
  );
}
