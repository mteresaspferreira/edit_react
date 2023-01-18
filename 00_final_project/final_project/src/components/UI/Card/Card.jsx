import "./styles.scss";

const Card = (props) => {
  return <div className="product-card">{props.children}</div>;
};

export default Card;
