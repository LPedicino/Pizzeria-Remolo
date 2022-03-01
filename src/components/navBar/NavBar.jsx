import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';

import './navBar.css';
import logo from './logo.png';

export default function Header() {
	return (
		<header class="navbar">
			<h1 class="brand-title">Pizzeria Don Remolo</h1>
			<div className="logo-container">
				<img src={logo} alt="Logo" />
			</div>
			<nav class="navbar-links">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Menú</a>
					</li>
					<li>
						<a href="#">Cart</a>
					</li>
					<li>
						<a href="#">About Us</a>
					</li>
				</ul>
			</nav>

			{/* llevar a otros componente */}
			<Dropdown variant="warning" className="toogle">
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
			</Dropdown>
		</header>
	);
}
