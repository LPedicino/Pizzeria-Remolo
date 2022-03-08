import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navBar.css";

//
const NavBar = () => {
  return (
    <Navbar fixed="top" variant="dark" className="header">
      <Container className="navbar">
        <NavDropdown className="toogle-menu" menuVariant="dark">
          <NavDropdown.Item href="#home">Home</NavDropdown.Item>
          <NavDropdown.Item href="#Menu">Menu</NavDropdown.Item>
          <NavDropdown.Item href="#Card">Card</NavDropdown.Item>
          <NavDropdown.Item href="#faq">F.A.Q</NavDropdown.Item>
          <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
        </NavDropdown>
        <div className="wrapper">
          <img src={logo} alt="don remolo" className="logo" />
          <Navbar.Brand href="#home" className="nav-title">
            Pizzeria Don Remolo
          </Navbar.Brand>
        </div>
        <Nav className="me-auto nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#card">Card</Nav.Link>
          <Nav.Link href="#faq">F.A.Q</Nav.Link>
          <Nav.Link href="#contact">Contact us</Nav.Link>
        </Nav>
        <FontAwesomeIcon
          className="cart"
          icon={faCartShopping}
          size="2x"
        ></FontAwesomeIcon>
      </Container>
    </Navbar>
  );
};

export default NavBar;
