import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="text-footer">
        <Col sm>
          <img src={logo} alt="" />
        </Col>
        <Col sm>
          <h5>Pizzeria Don Remolo</h5>
        </Col>
        <Col sm>
          <h6>Servicio al cliente</h6>
        </Col>
        <Col sm>
          <h6>¿Cómo comprar?</h6>
        </Col>
        <Col sm>
          <h6>Condiciones de uso</h6>
        </Col>
        <Col sm className="icons">
          <FontAwesomeIcon className="icon" icon={faFacebookSquare} size="2x" />
          <FontAwesomeIcon
            className="icon"
            icon={faInstagramSquare}
            size="2x"
          />
          <FontAwesomeIcon className="icon" icon={faWhatsappSquare} size="2x" />
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
