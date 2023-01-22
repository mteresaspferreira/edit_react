import React from "react";

export const CartProducts = ({ cartItems }) => {
  return (
    <div className="cart-container-cart">
      <div className="cart-header">
        <h2>
          Shopping bag (
          {cartItems != undefined && <span> {cartItems.length} </span>})
        </h2>
      </div>
      <div className="cart-main">
        <ul className="cart-item">
          {cartItems.map((el) => (
            <li key={el.id}>
              <div className="cart-item-image">
                <img
                  src={el.image}
                  height="120px"
                  width="100%"
                  style={{ objectFit: "cover" }}
                />
                <div className="delete-cart">Eliminar</div>
              </div>
              <div className="cart-item-main">
                <div>
                  <p className="cart-item-name" style={{ fontWeight: "600" }}>
                    {el.name}
                  </p>
                  <p className="cart-item-quantity">quantity: {el.quantity}</p>
                  <p className="cart-item-size">size: {el.size}</p>
                </div>
                <div className="cart-item-price">
                  <p style={{ fontWeight: "600" }}>{el.price} €</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
