import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import carousel2 from "../../assets/carousel2.png";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";
import { CartContex } from "../../Context/CartContex";

const Cards = ({ data }) => {
  const { _id, nombre, precio, descripcion } = data;

  const { onAddToCart } = useContext(CartContex);

  const [cant, setCant] = useState(0);
  const [alerta, setAlerta] = useState(false);

  const addToCart = () => {
    if (cant === 0) {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 3000);
      return;
    }

    const objPedido = {
      id: _id,
      nombrePedido: nombre,
      cant: cant,
      precio: precio,
    };

    onAddToCart(objPedido);
    // console.log(objPedido);
  };

  return (
    <div className=" d-flex flex-column gap-3">
      <Card>
        <Card.Img src={carousel2} />

        <Card.Body>
          <Card.Title className="fw-bold text-center">{nombre}</Card.Title>

          <Card.Text className="mt-3 mb-3 text-center">{descripcion}</Card.Text>

          <Card.Text className="mb-2 text-center">
            <span className="text-danger fw-bold">{precio}$</span> - {"8"} Porc.
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
          {alerta && (
            <div className="text-danger text-center fw-bold p-3">
              Agrega una cantidad
            </div>
          )}
          <Button onClick={addToCart} className="w-100" variant="danger">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
