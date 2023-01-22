//css
import "./styles.scss";
//react
import React, { useContext } from "react";
import { Link } from "react-router-dom";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//components
import NavMenu from "./Nav/Nav";
import Icon from "../../UI/Icon/Icon";
import logoEdit from "../../../assets/logo-edit.svg";
//context
import { CartContext } from "../../../contexts/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Container fluid className="header-container p-2">
      <Container>
        <Row>
          <Col sm={2} md={2} lg={2} className="p-2">
            <div className="edit-logo d-flex align-items-center justify-content-start">
              <Link to="/">
                <img src={logoEdit} alt="logo edit shop" />
              </Link>
            </div>
          </Col>
          <Col sm={10} md={10} lg={6}>
            <NavMenu />
          </Col>
          <Col
            md={12}
            lg={4}
            className="p-3 d-flex align-items-center justify-content-end gap-3"
          >
            <Link to="/login" className="login-btn">
              LOGIN
            </Link>
            <Link to="#" style={{ display: "flex" }}>
              <Icon name={"search"} height={"15px"} color={"white"} />
            </Link>
            <Link to="#" style={{ display: "flex" }}>
              <Icon name={"favourite"} height={"20px"} color={"white"} />
            </Link>
            <Link
              to="/cart"
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <Icon name={"cart"} height={"20px"} color={"white"} />
              {cartItems != undefined && (
                <span
                  style={{ fontSize: "0.8em", lineHeight: "1", width: "8px" }}
                >
                  {cartItems.length}{" "}
                </span>
              )}
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
