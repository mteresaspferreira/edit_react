import "./styles.scss";

import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Slideshow = () => {
  const sliderList = [
    {
      img: "https://picsum.photos/1000/500",
      title: "Yohji Yamamoto",
      subTitle: "Y-3",
    },
    {
      img: "https://picsum.photos/1000/500",
      title: "Lorem ipsum dolor sit am",
      subTitle: "Dolor sit",
    },
  ];

  return (
    <Carousel indicators={false} controls={false}>
      {sliderList.map((el) => (
        <Carousel.Item key={el.title}>
          <img className="d-block w-100" src={el.img} alt="First slide" />
          <Carousel.Caption>
            <div className="carousel-item-title">
              <h3>{el.title}</h3>
              <p>{el.subTitle}</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;
