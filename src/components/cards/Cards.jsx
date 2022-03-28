import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
<<<<<<< HEAD
import carousel2 from "./carousel2.png";
=======
import carousel2 from "../../assets/carousel2.png";
>>>>>>> dante_develop
import { useState } from "react";
import "./card.css";

const producto = {
  id: 1,
  name: "Pizza Napolitana",
  pizzaGrandeInfo: {
    precioGrande: 120,
    porcionesGrande: 8,
  }
  
};

const Cards = () => {
  const {
    name,
    pizzaGrandeInfo: { precioGrande, porcionesGrande },
   
  } = producto;

  const [cant, setCant] = useState(0);

  const addToCart = () => {
    if(cant === 0) return;

    const objPedido = {
      nombrePedido: name,
      cant: cant,

    };

    console.log(objPedido)
  };

  return (
    <div className="cardbody d-flex flex-column mb-5">
      <Card>
        <Card.Img src={carousel2} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="mb-2 text-center">{precioGrande}$ - {porcionesGrande} Porc.</Card.Text>
          <div className="d-flex align-items-center justify-content-evenly mt-3 mb-3">
            <Button
              disabled={cant === 0 && "disabled"}
              variant="light"
              onClick={() => {
                setCant(cant - 1);
              }}
            >
              -
            </Button>
            <p>{cant}</p>
            <Button
              variant="light"
              onClick={() => {
                setCant(cant + 1);
              }}
            >
              +
            </Button>
          </div>
          <Button onClick={addToCart} className="w-100" variant="danger">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
