import { Col, Container, Row } from "react-bootstrap";
import "./Faqs.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import MyAccordion from "../MyAccordion/MyAccordion";
import { accordionData } from "../../data/accordionData";

const Faqs = () => {
  return (
    <section className="faqs second-bg">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Row className="justify-content-center">
          <Col lg={10}>
            <MyAccordion data={accordionData} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
