//css
import "./styles.scss";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//components
import TitleSection from "../TitleSection/TitleSection";

const LooksSection = ({ sectionLooks }) => {
  return (
    <section className="looks">
      <TitleSection titleName="Looks" />
      <Container>
        <Row>
          {sectionLooks.map((el) => (
            <Col lg={3} md={6} sm={6} xs={6} key={el.name}>
              <article className="look-list mt-4">
                <picture>
                  <img src={el.image} width="100%" height="100%" />
                </picture>
                <div className="look-title">
                  <p>{el.name}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LooksSection;
