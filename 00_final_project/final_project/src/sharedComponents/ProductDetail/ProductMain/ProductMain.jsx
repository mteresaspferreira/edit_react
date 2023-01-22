export const ProductMain = ({ product }) => {
  return (
    <>
      <div className="product-detail-description">
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-detail-madeIn">
        <h3>Made in</h3>
        <p>{product.madeIn}</p>
      </div>
      <div className="product-detail-partnership">
        <h3>Partnership</h3>
        <p>{product.partnership}</p>
      </div>
      <div className="product-detail-brand">
        <h3>In Collab</h3>
        <p>{product.brand}</p>
      </div>
    </>
  );
};
