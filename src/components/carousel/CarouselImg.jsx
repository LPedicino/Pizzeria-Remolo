import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';
import carousel1 from './carousel-1.png';
import carousel2 from './carousel2.png';
import carousel3 from './carousel3.png';

/*
  colocar los Carousel.Item en un componente aparte
  {
    carouselData.map(props => (<CarouselItem {...props} />))
  }
*/

const CarouselImg = () => {
	return (
		<Carousel className="carousel">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={carousel1}
					alt="First slide"
				/>
				<Carousel.Caption>
					{/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={carousel2}
					alt="Second slide"
				/>

				<Carousel.Caption>
					{/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={carousel3}
					alt="Third slide"
				/>

				<Carousel.Caption>
					{/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselImg;
