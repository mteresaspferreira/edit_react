import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CartItem } from "./CartItem/CartItem";

import { CartContext } from "../../../contexts/CartContext";

export const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);
  //context
  // const { cartItems } = useContext(CartContext);
  console.log("shopping cart ", cartItems);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.map((el) => (
          <li key={el.id}>
            <p>{el.name}</p>
            <p>quantity: {el.quantity}</p>
            <p>size: {el.size}</p>
            <p>price: {el.price}</p>
          </li>
        ))}
      </div>
    </div>
  );
};
