import "./styles.scss";

import { Container, Row, Col } from "react-bootstrap";
import TopProducts from "./TopProducts/TopProducts";
import ImageSlider from "../../../sharedComponents/ImageSlider/ImageSlider";
import AboutSection from "./AboutSection/AboutSection";
import LooksSection from "./LooksSection/LooksSection";
import LoaderContainer from "../../../sharedComponents/LoaderContainer/LoaderContainer";

//images
import imgLooks1 from "../../../assets/homepage/looks/looks01.jpg";
import imgLooks2 from "../../../assets/homepage/looks/looks02.jpg";
import imgLooks3 from "../../../assets/homepage/looks/looks03.jpg";
import imgLooks4 from "../../../assets/homepage/looks/looks04.jpg";
import imgPress1 from "../../../assets/homepage/press/press01.jpg";
import imgPress2 from "../../../assets/homepage/press/press02.jpg";
import imgPress3 from "../../../assets/homepage/press/press03.jpg";
import PressSection from "./PressSection/PressSection";
import TalkingAboutSection from "./TalkingAboutSection/TalkingAboutSection";

const Homepage = (props) => {
  const sectionLooks = [
    { id: 1, name: "look 1", image: imgLooks1 },
    { id: 2, name: "look 2", image: imgLooks2 },
    { id: 3, name: "look 3", image: imgLooks3 },
    { id: 4, name: "look 4", image: imgLooks4 },
  ];

  const sectionPress = [
    { id: 1, name: "Replica Collection", image: imgPress1 },
    { id: 2, name: "Hublot Collaboration", image: imgPress2 },
    { id: 3, name: "Dr Martens vs Yamamoto", image: imgPress3 },
  ];

  // ALERT: REVER CONTAINERS E ROW PORQUE ESTÁ MAL FEITO
  return (
    <>
      <ImageSlider />
      <Container className="mb-3 pt-4" style={{ background: "#f2f2f2" }} fluid>
        <Container>
          {props.isLoading && <LoaderContainer />}
          {!props.isLoading && (
            <TopProducts
              productsList={props.productsList}
              loading={props.loading}
              error={props.error}
            />
          )}
        </Container>
      </Container>
      <Container className="home-container" fluid>
        <AboutSection />
      </Container>
      <Container className="home-container" fluid>
        <LooksSection sectionLooks={sectionLooks} />
      </Container>

      <Container
        className="home-container"
        style={{ background: "#f2f2f2" }}
        fluid
      >
        <Container>
          <PressSection sectionPress={sectionPress} />
        </Container>
      </Container>

      <Container className="home-container" fluid>
        <TalkingAboutSection />
      </Container>
    </>
  );
};

export default Homepage;
