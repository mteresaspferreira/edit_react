//css
import "./styles.scss";
//bootstrap
import { Container, Row } from "react-bootstrap";

const TitleSection = ({ titleName }) => {
  return (
    <Container>
      <Row>
        <div className="title-section d-flex justify-content-center">
          {titleName}
        </div>
      </Row>
    </Container>
  );
};

export default TitleSection;
