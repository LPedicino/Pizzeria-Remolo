import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import carousel2 from "../../assets/carousel2.png";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";
import { CartContex } from "../../Context/CartContex";

const Cards = ({data}) => {

  // console.log(data)

  const {_id, nombre, precio, descripcion} = data;

  // const producto = {
  //   id: 1,
  //   name: "Pizza Napolitana",
  //   pizzaGrandeInfo: {
  //     precioGrande: 120,
  //     porcionesGrande: 8,
  //   },
  // };

   // const {
  //   name,
  //   pizzaGrandeInfo: { precioGrande, porcionesGrande },
  // } = producto;

  const { onAddToCart } = useContext(CartContex);

  const [cant, setCant] = useState(0);

  const addToCart = () => {
    if (cant === 0) return;
    
    const objPedido = {
      nombrePedido: nombre,
      cant: cant,
    };

    onAddToCart(objPedido);
    console.log(objPedido);
  };

  return (
    <div className=" d-flex flex-column mb-5">
      <Card>
        <Card.Img src={carousel2} />

        <Card.Body>
          <Card.Title className="text-center">{nombre}</Card.Title>
          <Card.Text className="mb-2 text-center">
            {precio}$ - {'8'} Porc.
          </Card.Text>

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
            <p className="m-0 fw-bold">{cant}</p>

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
