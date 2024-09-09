import { Container } from "react-bootstrap";
import "./Gallery.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { galleryData } from "../../data/galleryData";
import CenterSlider from "../CenterSlider/CenterSlider";

const Gallery = () => {

  return (
    <section className="gallery">
      <Container className="overflow-hidden">
        <SectionTitle
          title="Gallery"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <CenterSlider data={galleryData} />
      </Container>
    </section>
  );
};

export default Gallery;
