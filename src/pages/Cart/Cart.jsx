import "./cart.css";

import { Link } from "react-router-dom";
import { CartContex } from "../../Context/CartContex";
import { useContext } from "react";

const Cart = () => {
  
  const { cartItems } = useContext(CartContex);

  return (
    <div className="confirmation pt-6">
      <h2>Vista de tu pedido</h2>
      <div className="confirmation-container">
        {cartItems.length === 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p>No hay productos agregados</p>
            <Link to="/">Ir a comprar</Link>
          </div>
        ) : (
          <div>
            <div className="confirmation-grid">
              <div className="confirmation-description">
                <span>Descripcion</span>
                <p>Pizza Jamon y Morron</p>
                <p>Empanada J y Q</p>
                <p>Helado</p>
                <p>Cerveza</p>
                <p>Coca-Cola</p>
              </div>

              <div className="confirmation-description ">
                <span>Cant.</span>
                <input
                  className="input-number"
                  value={0}
                  type="number"
                  name=""
                  id=""
                  readOnly
                />
                <input
                  className="input-number"
                  value={0}
                  type="number"
                  name=""
                  id=""
                  readOnly
                />
                <input
                  className="input-number"
                  value={0}
                  type="number"
                  name=""
                  id=""
                  readOnly
                />
                <input
                  className="input-number"
                  value={0}
                  type="number"
                  name=""
                  id=""
                  readOnly
                />
                <input
                  className="input-number"
                  value={0}
                  type="number"
                  name=""
                  id=""
                  readOnly
                />
              </div>

              <div className="confirmation-description precio">
                <span>Precio</span>
                <p>$99</p>
                <p>$99</p>
                <p>$99</p>
                <p>$99</p>
                <p>$99</p>
              </div>
            </div>
            <div className="checkout">
              <div className="checkout-totalprice">
                <h3>Total a pagar</h3>
                <p>$0</p>
              </div>
            </div>

            <div className="inputs">
              <div className="inputs-container">
                <div>
                  <input type="text" name="name" placeholder="Name" />
                </div>

                <div>
                  <input type="text" name="name" placeholder="Address" />
                </div>

                <div>
                  <input type="text" name="name" placeholder="Nombre" />
                </div>

                <div>
                  <input type="text" name="name" placeholder="Notes" />
                </div>

                <Link to="/" className="on-cancel text-center">
                  Back
                </Link>
                <Link to="/" className="on-confirm text-center">
                  Confirm
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
