import { Container } from "react-bootstrap";
import "./Testimonials.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import CardsSlider from "../CardsSlider/CardsSlider";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container>
        <SectionTitle
          title="Testimonials"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <CardsSlider cards={testimonialsData} />
      </Container>
    </section>
  );
};

export default Testimonials;
