//css
import "./app.scss";
//react
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//bootstrap
import Container from "react-bootstrap/Container";
//components
import Header from "./components/Layout/Header/Header";
import Homepage from "./components/Pages/Homepage/Homepage";
import Shop from "./components/Pages/Shop/Shop";
import Fabric from "./components/Pages/Fabric/Fabric";
import Journal from "./components/Pages/Journal/Journal";
import About from "./components/Pages/About/About";
import Footer from "./components/Layout/Footer/Footer";
import ProductDetail from "./sharedComponents/ProductDetail/ProductDetail";
import TopMesssage from "./sharedComponents/TopMessage/TopMessage";
import { Login } from "./components/Pages/Login/Login";
import { ShoppingCart } from "./components/Pages/ShoppingCart/ShoppingCart";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //GET ALL PRODUCTS
  async function fetchAllProducts() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://foxcoding.net/api/getProductsList?nProducts=100"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      //decimal price
      const transformedProducts = data.data.products.map((el) => {
        return (el.price = el.price.toFixed(2));
      });
      //categories name
      const categoriesName = data.data.products.map((el) => {
        return el.category.map((category) => {
          if (el.category == 1) {
            el.category = { id: 1, name: "Snickers" };
          } else if (el.category == 2) {
            el.category = { id: 2, name: "Coats" };
          } else if (el.category == 3) {
            el.category = { id: 3, name: "Pants" };
          } else if (category == 4) {
            el.category = { id: 4, name: "Jackets" };
          }
        });
      });
      setAllProducts(data.data.products);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Container fluid className="g-0 app-container">
      <TopMesssage />
      <Header />
      <div className="container-page">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                productsList={allProducts}
                isLoading={isLoading}
                error={error}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                productsList={allProducts}
                isLoading={isLoading}
                error={error}
              />
            }
          />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route exact path="/fabric" element={<Fabric />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
      {/* </CartContextProvider> */}
      <Footer />
    </Container>
  );
}

export default App;
