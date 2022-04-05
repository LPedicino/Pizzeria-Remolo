import "./cart.css";

import { Link } from "react-router-dom";
import { CartContex } from "../../Context/CartContex";
import { useContext } from "react";

const Cart = () => {
  const { cartItems } = useContext(CartContex);
  console.log(cartItems);

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
            {cartItems.map((element) => console.log(element))}
            <div className="cart_page-grid">
              <div className="cart_page-description">
                <span>Descripcion</span>
                {cartItems.map((element) => (
                  <p key={element.id}>{element.nombrePedido}</p>
                ))}
              </div>

              <div className="cart_page-description ">
                <span>Cant.</span>
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
                <span>Precio</span>
                {cartItems.map((element) => (
                  <p key={element.id}>${element.precio}</p>
                ))}
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
                <Link to="/confirm" className="on-confirm text-center">
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
