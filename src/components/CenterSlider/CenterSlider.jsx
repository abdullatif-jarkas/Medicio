import { Carousel } from "react-bootstrap";
import "./CenterSlider.css";
import Img1 from "./../../assets/img/gallery/gallery-1.jpg";
import Img2 from "./../../assets/img/gallery/gallery-2.jpg";
import Img3 from "./../../assets/img/gallery/gallery-3.jpg";
import Img4 from "./../../assets/img/gallery/gallery-4.jpg";
import Img5 from "./../../assets/img/gallery/gallery-5.jpg";
import { useEffect, useState } from "react";

const CenterSlider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const totalSlides = data.length;

  const handleSelectSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);
  
  return (
    <div className="center-slider mt-5">
      <div className="slides">
        {data.map((slide, index) => (
          <div
            key={index}
            className={currentSlide == index ? "slide active" : "slide"}
            style={{ transform: `translateX(-${currentSlide * 107}%)` }}
          >
            <img src={slide} className="w-100 h-100" alt="" />
          </div>
        ))}
      </div>
      
      <div className="pagination justify-content-center">
        {data.map((_, index) => (
          <button
            key={index}
            className={`pagination-btn ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => handleSelectSlide(index)}
          >
          </button>
        ))}
      </div>
    </div>
  );
};

export default CenterSlider;
