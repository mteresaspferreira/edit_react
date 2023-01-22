export const ProductFooter = ({
  productSizes,
  productQuantity,
  selectedSize,
  increaseQuantity,
  decreaseQuantity,
  selectSize,
  addToCart,
}) => {
  return (
    <>
      <div className="product-detail-size">
        <h3>size</h3>
        <div className="product-detail-size-buttons">
          <div className="buttons">
            {productSizes.map((number) => (
              <button
                key={number.type}
                value={number.type}
                onClick={selectSize}
                disabled={number.type == selectedSize}
              >
                {number.type}
              </button>
            ))}
          </div>
          <span className="size-guidelines">Size Guidelines</span>
        </div>
        <span className="product-detail-size-info">
          Model is a US size 2-4, wears Matter size 1. 175cm tall.
        </span>
      </div>

      <div className="product-detail-quantities">
        <div className="product-detail-quantities-header">
          <h3>Quantity</h3>
        </div>
        <div className="product-detail-quantities-container">
          <div className="btn-quantity">
            <button
              className="btn-quantity-decrease"
              disabled={productQuantity <= 0}
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="quantity">{productQuantity}</span>
            <button
              className="btn-quantity-increase"
              onClick={increaseQuantity}
            >{`+`}</button>
          </div>
          <button
            className="btn-add-to-cart"
            disabled={selectedSize.length === 0 || productQuantity === 0}
            onClick={addToCart}
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};
