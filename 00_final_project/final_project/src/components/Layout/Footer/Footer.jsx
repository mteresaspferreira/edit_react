//css
import "./styles.scss";
//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
//components
import SiteMapLinks from "./SiteMapLinks/SiteMapLinks";
import SiteMapTitle from "./SiteMapTitle/SiteMapTitle";

const Footer = () => {
  const categoriesLinks = [
    "About us",
    "Testimonials",
    "Contact",
    "Journal",
    "Privacy Policy",
  ];

  const partnersLinks = [
    "Support",
    "Shipping & Returns",
    "Size Guide",
    "Product Care",
  ];

  return (
    <footer className="footer-container">
      <Container>
        <Row className="d-flex">
          <Col lg={2} md={4} sm={4}>
            <SiteMapTitle title={"Categories"} />
            <SiteMapLinks items={categoriesLinks} />
          </Col>
          <Col lg={2} md={4} sm={4}>
            <SiteMapTitle title={"Partners"} />
            <SiteMapLinks items={partnersLinks} />
          </Col>
          <Col lg={2} md={4} sm={4}>
            <SiteMapTitle title={"Contact us"} />
            <p className="site-map-address">
              <span style={{ display: "block" }}>Adi-Dassler-Strasse 1</span>
              <span style={{ display: "block" }}>91074 Herzogenaurach </span>
              <span style={{ display: "block" }}>Germany</span>
              <span className="site-map-address--tel">+49 (0) 9132 84-0</span>
            </p>
          </Col>
          {/* <Col lg={6} md={12}>
            <SiteMapTitle title={"Subscribe to newsletter"} />
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
