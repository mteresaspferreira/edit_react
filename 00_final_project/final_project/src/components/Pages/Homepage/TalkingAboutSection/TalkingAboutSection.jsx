//css
import "./styles.scss";
//bootstrap
import { Container, Row } from "react-bootstrap";
//components
import TitleSection from "../TitleSection/TitleSection";
//images
import talking01 from "../../../../assets/homepage/talking_about_us/talking01.svg";
import talking02 from "../../../../assets/homepage/talking_about_us/talking02.svg";
import talking03 from "../../../../assets/homepage/talking_about_us/talking03.svg";
import talking04 from "../../../../assets/homepage/talking_about_us/talking04.svg";
import talking05 from "../../../../assets/homepage/talking_about_us/talking05.svg";
import talking06 from "../../../../assets/homepage/talking_about_us/talking06.svg";
import talking07 from "../../../../assets/homepage/talking_about_us/talking07.svg";
import talking08 from "../../../../assets/homepage/talking_about_us/talking08.svg";

const talkingAboutUs = [
  { image: talking01 },
  { image: talking02 },
  { image: talking03 },
  { image: talking04 },
  { image: talking05 },
  { image: talking06 },
  { image: talking07 },
  { image: talking08 },
];

const TalkingAboutSection = () => {
  return (
    <Container>
      <Row>
        <TitleSection titleName="Talking about us" />
        <ul className="justify-content-center d-flex flex-wrap align-items-start">
          {talkingAboutUs.map((el) => (
            <li className="p-2" key={el.image}>
              <img src={el.image} />
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
};

export default TalkingAboutSection;
