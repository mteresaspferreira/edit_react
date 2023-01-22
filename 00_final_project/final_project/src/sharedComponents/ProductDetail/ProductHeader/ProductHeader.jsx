import { Rating } from "react-simple-star-rating";

export const ProductHeader = ({ product, price, scoreRating }) => {
  return (
    <div className="product-detail-header">
      <h2 className="product-detail-name">{product.name}</h2>
      <div className="d-flex justify-content-between">
        <p className="product-detail-price">{price}</p>
        <div className="product-detail-score d-flex align-content-center align-itens-center justify-content-center">
          <Rating
            initialValue={scoreRating}
            readonly={true}
            size={25}
            fillColor="#F3DA24"
          />
          <p className="product-detail-score--number d-flex align-items-center">
            {product.score} of 5
          </p>
        </div>
      </div>
    </div>
  );
};
