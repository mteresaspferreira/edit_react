//css
import "./reset.scss";
import "./index.scss";
//react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//bootstrap
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
//componets
import App from "./App";
import ScrollToTop from "./sharedComponents/ScrollToTop/ScrollToTop";
//providers
import { CartProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </ThemeProvider>
);
