//css
import "./styles.scss";
//react
import { useParams, Link } from "react-router-dom";

const ProductsList = ({ productsList, col }) => {
  //params
  const { id } = useParams();

  return (
    <>
      {productsList.map((item) => (
        <Link
          key={item.id}
          style={{ display: "block" }}
          to={`/productDetail/${item.id}`}
          className={`${col} product-list-item`}
        >
          <div className="product-list-image">
            <img src={item.image} width="100%" height="100%" />
          </div>
          <div className="product-list-item-detail">
            <h3 className="product-list-title">{item.name}</h3>
            <p className="product-list-category">{item.category.name}</p>
            <p className="product-list-price">{item.price} €</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductsList;
