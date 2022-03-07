import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import carousel2 from "./carousel2.png";
import './card.css'

const Cards = () => {
  return (
    <div className="cardbody d-flex flex-column mb-5">
      <Card>
        <Card.Img src={carousel2} />
        <Card.Body>
          <Card.Title className="text-center">Pizza Napolitana</Card.Title>
          <Card.Text className="text-center">$850 - 8 porc</Card.Text>
          <Card.Text className="text-center">$500 - 4 porc</Card.Text>
          <Button className="w-100" variant="danger">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
