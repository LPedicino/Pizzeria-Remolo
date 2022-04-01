import { createContext, useState } from "react";

export const CartContex = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  //Agrega items al carrito
  const onAddToCart = (item) => {
    // console.log(item)
    setCartItems([...cartItems, item]);
  };

  return (
    <CartContex.Provider
      value={{
        cartItems,
        onAddToCart,
      }}
    >
      {props.children}
    </CartContex.Provider>
  );
};

export default CartContextProvider;
