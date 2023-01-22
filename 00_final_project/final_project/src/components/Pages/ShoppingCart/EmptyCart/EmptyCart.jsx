import React from "react";

export const EmptyCart = () => {
  return (
    <section className="cart-container d-flex justify-content-center align-items-center">
      <div className="cart-container-empty">
        <h3>Your shopping bag is empty.</h3>
        <p>Be inspired and discover something new to renew your wardrobe.</p>
        <button>Discover the latest</button>
      </div>
    </section>
  );
};
