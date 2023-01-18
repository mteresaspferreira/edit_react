import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/Pages/ShoppingCart/ShoppingCart";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // const cartQuantity = cartItems.reduce(
  //   (quantity, item) => item.quantity + quantity,
  //   0
  // );
  // function getItemQuantity(id) {
  //   return cartItems.find((item) => item.id === id)?.quantity || 0;
  // }
  // function increaseCartQuantity(id) {
  //   setCartItems((productsList) => {
  //     if (productsList.find((item) => item.id === id) == null) {
  //       return [...productsList, { id, quantity: 1 }];
  //     } else {
  //       return productsList.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // }
  // function decreaseCartQuantity(id) {
  //   setCartItems((currItems) => {
  //     if (currItems.find((item) => item.id === id)?.quantity === 1) {
  //       return currItems.filter((item) => item.id !== id);
  //     } else {
  //       return currItems.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity - 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // }
  // function removeFromCart() {
  //   setCartItems((currItems) => {
  //     return currItems.filter((item) => item.id !== id);
  //   });
  // }
  console.log("context cart items ", cartItems);

  return (
    <CartContext.Provider
      value={{
        // getItemQuantity,
        // increaseCartQuantity,
        // decreaseCartQuantity,
        // removeFromCart,
        cartItems,
        setCartItems,
        // cartQuantity,
      }}
    >
      {children}
      <ShoppingCart />
    </CartContext.Provider>
  );
};
