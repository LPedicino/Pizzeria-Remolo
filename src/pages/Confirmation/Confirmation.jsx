import React from "react";
import Footer from "../../components/footer/Footer";
import "./confirmation.css";
import logo from "./logo.svg";
import back from "./back.svg";
import guy from "./guy.svg";

const Confirmation = () => {
  return (
    <>
      <div className="confirmation_container ">
        <div className="topBar">
          <img src={back} alt="back" />
          <img src={logo} alt="logo" />
        </div>
        <div className="confirmation_user">
          <p>Juan Carlos</p>
          <p>Pedido #0001</p>
          <div>
            <p>Confirmated !</p>
          </div>
        </div>
        <div className="guy-container">
          <img src={guy} alt="guy" />
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

export default Confirmation;
