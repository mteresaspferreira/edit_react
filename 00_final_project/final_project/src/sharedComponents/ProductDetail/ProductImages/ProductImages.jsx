//bootstrap
import { Container, Row, Col } from "react-bootstrap";

export const ProductImages = ({ product }) => {
  return (
    <Col lg={5}>
      <Container>
        <Row>
          <Col lg={2}>
            <ul>
              <li>
                <img width="100%" height="60px" alt="" src={product.image} />
              </li>
              <li className="mt-3">
                <img width="100%" height="60px" alt="" src={product.image} />
              </li>
              <li className="mt-3">
                <img width="100%" height="60px" alt="" src={product.image} />
              </li>
              <li className="mt-3">
                <img width="100%" height="60px" alt="" src={product.image} />
              </li>
              <li className="mt-3">
                <img width="100%" height="60px" alt="" src={product.image} />
              </li>
            </ul>
          </Col>
          <Col lg={10}>
            <img src={product.image} />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};
