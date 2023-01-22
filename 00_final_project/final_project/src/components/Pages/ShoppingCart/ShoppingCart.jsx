import { useContext, useState, useEffect } from "react";
import "./styles.scss";

import { CartContext } from "../../../contexts/CartContext";
import { Container, Row } from "react-bootstrap";

import { EmptyCart } from "./EmptyCart/EmptyCart";
import { CartSummary } from "./CartSummary/CartSummary";
import { CartProducts } from "./CartProducts/CartProducts";

export const ShoppingCart = () => {
  const [total, setTotal] = useState(0.0);

  //context
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    let subtotal = 0;
    cartItems.map((el) => {
      subtotal += el.quantity * el.price;
    });
    setTotal(subtotal);
  }, [cartItems]);

  return (
    <Container>
      <Row>
        {cartItems.length == 0 && <EmptyCart />}
        {cartItems.length > 0 && (
          <section className="cart-container">
            <CartProducts cartItems={cartItems} />
            <CartSummary total={total} />
          </section>
        )}
      </Row>
    </Container>
  );
};
