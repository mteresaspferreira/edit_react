import "./styles.scss";

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProductsList from "../../components/ProductsList/ProductsList";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
//contexts
import { CartContext } from "../../contexts/CartContext";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [scoreRating, setScoreRating] = useState(0);
  const [price, setPrice] = useState(0);
  const [productSizes, setProductSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);
  // const [productName, setProductName] = useState(null);

  const { id } = useParams();

  //context
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://foxcoding.net/api/getProduct?id=${id}`)
      .then((res) => res.json())
      .then((product) => {
        //decimal price
        const decimalPrice = product.price.toFixed(2) + "€";

        //sizes
        const sizes = Object.keys(product.sizes);
        const availableSizes = sizes.map((el) => {
          return {
            type: el,
          };
        });

        //categories name
        const categoriesName = product.category.map((category) => {
          // console.log(category);
          if (category == 1) {
            product.category = { id: 1, name: "Snickers" };
          } else if (category == 2) {
            product.category = { id: 2, name: "Coats" };
          } else if (category == 3) {
            product.category = { id: 3, name: "Pants" };
          } else if (category == 4) {
            product.category = { id: 4, name: "Jackets" };
          }
        });

        // setProductName(product.name);
        setPrice(decimalPrice);
        setProductSizes(availableSizes);
        setScoreRating(product.score);
        setProduct(product);
      });
  }, [id]);

  const selectSize = (e) => {
    setSelectedSize(e.target.value);
  };

  const decreaseQuantity = () => {
    setProductQuantity((productQuantity) => productQuantity - 1);
  };

  const increaseQuantity = () => {
    setProductQuantity((productQuantity) => productQuantity + 1);
  };

  const addToCart = () => {
    const selectedProduct = {
      name: product.name,
      price: product.price,
      quantity: productQuantity,
      size: selectedSize,
    };
    setCartItems((curr) => [...curr, selectedProduct]);
  };

  return (
    <Container fluid>
      <BreadCrumb
        productCategory={product.category}
        productName={product.name}
      />
      <Container>
        <Row>
          <Col lg={5}>
            <Container>
              <Row>
                <Col lg={2}>
                  <ul>
                    <li>
                      <img
                        width="100%"
                        height="60px"
                        alt=""
                        src={product.image}
                      />
                    </li>
                    <li className="mt-3">
                      <img
                        width="100%"
                        height="60px"
                        alt=""
                        src={product.image}
                      />
                    </li>
                    <li className="mt-3">
                      <img
                        width="100%"
                        height="60px"
                        alt=""
                        src={product.image}
                      />
                    </li>
                    <li className="mt-3">
                      <img
                        width="100%"
                        height="60px"
                        alt=""
                        src={product.image}
                      />
                    </li>
                    <li className="mt-3">
                      <img
                        width="100%"
                        height="60px"
                        alt=""
                        src={product.image}
                      />
                    </li>
                  </ul>
                </Col>
                <Col lg={10}>
                  <img src={product.image} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={7}>
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
            <div className="product-detail-container">
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
                    disabled={productQuantity === 0}
                    onClick={addToCart}
                  >
                    add to cart
                  </button>
                </div>
                <button className="btn-add-to-wishlist">add to wishlist</button>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row>
        {!currentCategory && (
          <ProductsList productsList={currentCategoryList} col={"col-4"} />
        )}
      </Row> */}
      </Container>
    </Container>
  );
};

export default ProductDetail;
