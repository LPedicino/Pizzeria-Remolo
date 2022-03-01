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

/* <Dropdown variant="warning" className="toogle">
				<Dropdown.Toggle className="menu">
					Menu
				</Dropdown.Toggle>

				<Dropdown.Menu className="menu-drop">
					<Dropdown.Item
						className="menu-item"
						href="#/action-1"
					>
						Home
					</Dropdown.Item>
					<Dropdown.Item
						className="menu-item"
						href="#/action-2"
					>
						Menú
					</Dropdown.Item>
					<Dropdown.Item
						className="menu-item"
						href="#/action-3"
					>
						Cart
					</Dropdown.Item>
					<Dropdown.Item
						className="menu-item"
						href="#/action-4"
					>
						About us
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown> */

/* <Container className="navbar">
				<Row>
					<Col xs>
						<img
							src={logo}
							alt="don remolo"
							className="logo"
						/>
					</Col>
					<Col xs={{ order: 12 }}>
						<Navbar.Brand href="#home">
							Pizzeria Don Remolo
						</Navbar.Brand>
					</Col>
					<Col xs={{ order: 1 }}>
						<Nav className="me-auto hola">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#menu">Menu</Nav.Link>
							<Nav.Link href="#card">Card</Nav.Link>
							<Nav.Link href="#faq">F.A.Q</Nav.Link>
							<Nav.Link href="#contact">
								Contact us
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
			</Container> */
