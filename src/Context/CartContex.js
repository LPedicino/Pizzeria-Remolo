import { createContext, useState } from "react";

export const CartContex = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  //Agrega items al carrito
  const onAddToCart = (item) => {
    // console.log(item)
    setCartItems([...cartItems, item]);
  };

  // Elimina items del carrito
  const onRemoveToCart = (id) => {
    const itemsFiltered = cartItems.filter(element => element.id !== id)
    setCartItems(itemsFiltered)
  }

  return (
    <CartContex.Provider
      value={{
        cartItems,
        onAddToCart,
        onRemoveToCart
      }}
    >
      {props.children}
    </CartContex.Provider>
  );
};

export default CartContextProvider;
