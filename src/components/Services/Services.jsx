import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Services.css";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = ({ data }) => {
  return (
    <section className="services" id="services">
      <Container>
        <SectionTitle
          title="Services"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Row className="mt-5 pt-4">
          {data.map((card, index) => (
            <Col key={index} md={6} lg={4}>
              <ServiceCard icon={card.icon} title={card.title} text={card.text} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
