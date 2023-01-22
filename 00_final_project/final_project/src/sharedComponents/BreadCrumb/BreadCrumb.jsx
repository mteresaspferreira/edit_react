//css
import "./styles.scss";
//bootstrap
import { Container, Row } from "react-bootstrap";

function BreadCrumb({ productCategory, productName }) {
  return (
    <section className="breadcrumb-section mb-6">
      <Container>
        <Row>
          <ul>
            {productCategory != undefined && <li>{productCategory.name}</li>}
            <li>{productName}</li>
          </ul>
        </Row>
      </Container>
    </section>
  );
}

export default BreadCrumb;
