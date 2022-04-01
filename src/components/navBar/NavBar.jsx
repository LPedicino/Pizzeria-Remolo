import logo from "../../assets/logo.png";
import "./navBar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { CartContex } from "../../Context/CartContex";
import { useContext } from "react";


const NavBar = () => {

  const { cartItems } = useContext(CartContex);

  return (
    <Navbar fixed="top" bg="" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold text-white" id="offcanvasNavbarLabel">
              Pizzeria Don Remolo
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="fw-bold fs-3" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link href="#action2">Menu</Nav.Link>
              <Nav.Link href="#action2">Cart</Nav.Link>
              <Nav.Link href="#action2">F.A.Q</Nav.Link>
              <Nav.Link href="#action2">Contacto</Nav.Link>
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

          {
            cartItems.length > 0 && (
          <div className="cart-bubble d-flex justify-content-center text-center align-items-center">
            <span>{cartItems.length}</span>
          </div>
            ) 
          }
        </Link>

        <div className="d-flex nav-links-desktop">
          <li className="fw-bold">Home</li>
          <li>Menu</li>
          <li>Cart</li>
          <li>F.A.Q</li>
          <li>Contacto</li>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
