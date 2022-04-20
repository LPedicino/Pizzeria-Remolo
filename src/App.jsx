import React from "react";
import Home from "./pages/Home/Home";
import Cart from "../src/pages/Cart/Cart";
import NavBar from "../src/components/navBar/NavBar";
import Confirmation from '../src/pages/Confirmation/Confirmation'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import CartContextProvider from "./Context/CartContex";

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="*" element={<div>404 - Not Found</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>


    </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
