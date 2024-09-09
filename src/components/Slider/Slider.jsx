import { Carousel } from "react-bootstrap";
import "./Slider.css";

const Slider = ({ data }) => {
  return (
    <div className="slider" id="home">
      <Carousel fade className="h-100">
        {data.map((slide, index) => (
          <Carousel.Item key={index} interval={2000} className="h-100">
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={slide.img} className="h-100 w-100 object-cover" />
            <Carousel.Caption data-bs-theme="dark" className="bg-dark">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
