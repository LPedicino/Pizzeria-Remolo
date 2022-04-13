import logo from "../../assets/logo.png";
import "./navBar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { CartContex } from "../../Context/CartContex";
import { useContext } from "react";
import CustomLink from "./CustomLink";

const NavBar = () => {
  const { cartItems } = useContext(CartContex);

  return (
    <Navbar fixed="top" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="fw-bold text-white"
              id="offcanvasNavbarLabel"
            >
              Pizzeria Don Remolo
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mobile d-flex flex-column gap-3 pe-3">
              <CustomLink text="Home" to="/" />

              <CustomLink text="Cart" to="/Cart" />

              <CustomLink text="Contact" to="/Contact" />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Link to="/" className="navlink-logo">
          <img src={logo} alt="" />
        </Link>

        <div className="logo-titulo">
          <h6>Pizzeria Don Remolo</h6>
        </div>

        <Link to="/cart" className="cart-box">
          <FontAwesomeIcon
            className="cart"
            icon={faCartShopping}
          ></FontAwesomeIcon>

          {cartItems.length > 0 && (
            <div className="cart-bubble d-flex justify-content-center text-center align-items-center">
              <span>{cartItems.length}</span>
            </div>
          )}
        </Link>

        <Nav className="d-flex gap-5 px-5 nav-links-desktop">
          <CustomLink text="Home" to="/" />
          <div className="cart-bubble-desktop-container">
            <CustomLink text="Cart" to="/Cart" />
            {cartItems.length > 0 && (
              <span className="cart-bubble-desktop">{cartItems.length}</span>
            )}
          </div>
          <CustomLink text="Contact" to="/Contact" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
