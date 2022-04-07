import "./cart.css";

import { Link } from "react-router-dom";
import { CartContex } from "../../Context/CartContex";
import { useContext } from "react";
import xMark from "./xmark.svg";
import Formulario from "../../components/formulario/Formulario";

const Cart = () => {
  const { cartItems, onRemoveToCart } = useContext(CartContex);
  
  return (
    <div className="cart_page pt-6">
      <h2>Vista de tu pedido</h2>
      <div className="cart_page-container">
        {cartItems.length === 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p>No hay productos agregados</p>
            <Link to="/">Ir a comprar</Link>
          </div>
        ) : (
          <div>
            {/* {cartItems.map((element) => console.log(element))} */}
            <div className="cart_page-grid">
              <div className="cart_page-description">
                <span className="fw-bold">Descripcion</span>
                {cartItems.map((element) => (
                  <p key={element.id}>{element.nombrePedido}</p>
                ))}
              </div>

              <div className="cart_page-description">
                <span className="fw-bold">Cant</span>
                {cartItems.map((element) => (
                  <input
                    key={element.id}
                    className="input-number text-center"
                    value={element.cant}
                    type="number"
                    name=""
                    id=""
                    readOnly
                  />
                ))}
              </div>

              <div className="cart_page-description precio">
                <span className="fw-bold">Precio</span>
                {cartItems.map((element) => (
                  <p key={element.id}>${element.precio}</p>
                ))}
              </div>

              <div className="cart_page-description borrar">
                <span className="fw-bold d-block">Eliminar</span>

                {cartItems.map((element) => (
                  <div
                    key={element.id}
                    onClick={() => {
                      onRemoveToCart(element.id)
                    }}
                    className="cart_xmark borrar"
                  >
                    <img src={xMark} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="checkout">
              <div className="checkout-totalprice">
                <h3>Total a pagar</h3>
                <p>$0</p>
              </div>
            </div>

            <Formulario />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
