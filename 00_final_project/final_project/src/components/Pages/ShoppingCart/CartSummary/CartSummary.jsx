import React from "react";

import shoppingCartIcon from "../../../../assets/icons/cart/shopping-cart.svg";
import deliveryIcon from "../../../../assets/icons/cart/delivery.svg";
import returnIcon from "../../../../assets/icons/cart/return.svg";

export const CartSummary = ({ total }) => {
  return (
    <div className="cart-container-summary">
      <div className="cart-header">
        <h2>Summary</h2>
        <p>Free home delivery</p>
      </div>
      <div className="cart-total">
        <div className="cart-total-subtotal">
          <h3>Subtotal</h3>
          <p>{total} €</p>
        </div>
        <div className="cart-total-delivery">
          <p>Delivery</p>
          <span>Free</span>
        </div>
        <div className="cart-total-checkout">
          <button>Checkout</button>
          <span>Taxes included</span>
        </div>
        <div className="cart-total-info">
          <ul>
            <li>
              <img src={deliveryIcon} width="13px" /> <span>Free delivery</span>
            </li>
            <li>
              <img src={returnIcon} width="13px" />{" "}
              <span>Free returns in 60 days</span>
            </li>
            <li>
              <img src={shoppingCartIcon} width="13px" />{" "}
              <span>Secure payment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
