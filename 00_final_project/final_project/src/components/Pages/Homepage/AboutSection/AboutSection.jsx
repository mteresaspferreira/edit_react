//css
import "./styles.scss";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//components
import TitleSection from "../TitleSection/TitleSection";
//images
import imageAbout from "../../../../assets/homepage/about/section-about.jpg";

const AboutSection = () => {
  return (
    <Container>
      <TitleSection titleName="About" />
      <Row>
        <Col lg={6} className="mt-2">
          <img src={imageAbout} width="100%" />
        </Col>
        <Col lg={6} className="mt-2">
          <section className="about">
            <p className="about-first-paragraph pb-5">
              The partnership between renowned Japanese fashion designer, Yohji
              Yamamoto and authentic sports brand, Adidas, has revolutionized
              the industry. Adidas represents sport, Yohji Yamamoto represents
              design, and both symbolize true craftsmanship. Together they aim
              to develop the future of sportswear.
            </p>
            <div className="about-second-paragraph pb-4">
              <h3 className="pb-1">ADIDAS AND YAMAMOTO TOGETHER SINCE</h3>
              <p>October 2002</p>
            </div>
            <div className="about-third-paragraph mt-5">
              <h3 className="pb-2">THE SYMBOLS</h3>
              <ul>
                <li>The “Y” stands for Yohji Yamamoto</li>
                <li>
                  The “3” represents the signature Adidas three stripe logo
                </li>
                <li>The “-”-signifies the link between the two</li>
              </ul>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
