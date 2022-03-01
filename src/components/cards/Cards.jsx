import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// pasar por props los datos

import carousel2 from './carousel2.png';

const Cards = () => {
	return (
		<section className="d-flex flex-column target">
			<Card className="carta">
				<Card.Img src={carousel2} />
				<Card.Body className="d-flex flex-column align-items-center cardbody">
					<Card.Title>Pizza Napolitana</Card.Title>
					<Card.Text>$850 - 8 porc</Card.Text>
					<Card.Text>$500 - 4 porc</Card.Text>
				</Card.Body>
				<Button variant="danger">Add to Cart</Button>
			</Card>
		</section>
	);
};

export default Cards;
