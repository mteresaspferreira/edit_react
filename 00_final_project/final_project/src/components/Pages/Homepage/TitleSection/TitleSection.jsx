import "./styles.scss";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

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
