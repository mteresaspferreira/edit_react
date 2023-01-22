//css
import "./styles.scss";
//react
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//components
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { ProductImages } from "./ProductImages/ProductImages";
import { ProductHeader } from "./ProductHeader/ProductHeader";
import { ProductMain } from "./ProductMain/ProductMain";
//contexts
import { CartContext } from "../../contexts/CartContext";
import { ProductFooter } from "./ProductFooter/ProductFooter";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [scoreRating, setScoreRating] = useState(0);
  const [price, setPrice] = useState(0);
  const [productSizes, setProductSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

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
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: productQuantity,
      size: selectedSize,
      image: product.image,
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
        <Row className="mb-6">
          <ProductImages product={product} />
          <Col lg={7}>
            <ProductHeader
              product={product}
              price={price}
              scoreRating={scoreRating}
            />
            <div className="product-detail-container">
              <ProductMain product={product} />
              <ProductFooter
                productSizes={productSizes}
                productQuantity={productQuantity}
                selectedSize={selectedSize}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                selectSize={selectSize}
                addToCart={addToCart}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProductDetail;
