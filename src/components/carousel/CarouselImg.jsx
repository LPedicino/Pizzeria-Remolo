import React from "react";
import { Carousel } from "react-bootstrap";
import carousel1 from "../../assets/pizzas.png";
import carousel2 from "../../assets/empanadas.png";
import carousel3 from "../../assets/bebidas.png";
import carousel4 from "../../assets/postres.png";

/*
  colocar los Carousel.Item en un componente aparte
  {
    carouselData.map(props => (<CarouselItem {...props} />))
  }
*/

const CarouselImg = () => {
  return (
    <Carousel className="shadow">
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
        <Carousel.Caption>
          <h1>Pizzas</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="Second slide" />

        <Carousel.Caption>
          <h1>Empanadas</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel3} alt="Third slide" />

        <Carousel.Caption>
          <h1>Bebidas</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel4} alt="Fourth slide" />

        <Carousel.Caption>
          <h1>Postres</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImg;
