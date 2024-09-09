import { useEffect, useState } from "react";
import "./CardsSlider.css";
import TCard from "../Testimonials/TCard/TCard";

const CardsSlider = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getVisibleCards = () => {
    return window.innerWidth < 768 ? 1 : 3; // 1 card for mobile, 3 for large screens
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev < cards.length - getVisibleCards() ? prev + 1 : prev
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index * getVisibleCards());
  };

  // Calculate the number of "pages" (or groups of visible cards)
  const totalPages = Math.ceil(cards.length / getVisibleCards());

  return (
    <div className="slider-container mt-5">
      {/* <button className="slider-button prev" onClick={prevSlide}>
        Prev
      </button> */}
      <div className="slider-content">
        <div
          className="cards-wrapper"
          style={{
            transform: `translateX(-${
              (100 / getVisibleCards()) * currentSlide
            }%)`,
            // width: `${100 * (cards.length / getVisibleCards())}%`,
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className="card-container">
              <TCard
                text={card.text}
                img={card.img}
                name={card.name}
                work={card.work}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <button className="slider-button next" onClick={nextSlide}>
        Next
      </button> */}

      {/* Pagination Dots */}
      <div className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`pagination-dot ${
              currentSlide / getVisibleCards() === index ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardsSlider;
