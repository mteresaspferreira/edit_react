import React from "react";
import "./styles.scss";

import { Container, Row, Col } from "react-bootstrap";

import TitleSection from "../TitleSection/TitleSection";

const PressSection = ({ sectionPress }) => {
  return (
    <Row>
      <section className="press">
        <TitleSection titleName="Press" />
        <Container>
          <Row>
            {sectionPress.map((el) => (
              <Col lg={4} md={4} sm={12} key={el.name}>
                <article className="press-list mt-4">
                  <picture>
                    <img src={el.image} width="100%" height="100%" />
                  </picture>
                  <div className="press-title">
                    <p>{el.name}</p>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Row>
  );
};

export default PressSection;
