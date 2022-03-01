import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const NavBar = () => {
	return (
		<Navbar variant="dark" className="header">
			<Container className="navbar">
				<div className="wrapper">
					<img
						src={logo}
						alt="don remolo"
						className="logo"
					/>

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
			</Container>
		</Navbar>
	);
};

export default NavBar;
