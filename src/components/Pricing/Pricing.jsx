import { Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import PricingCard from "./PricingCard/PricingCard";
import { pricingData } from "../../data/pricingData";

const Pricing = () => {
  return (
    <section className="pricing">
      <Container>
        <SectionTitle
          title="Pricing"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Row className="gy-3 mt-5">
          {pricingData.map((card, index) => (
            <Col key={index} lg={6} xl={3}>
              <PricingCard plan={card.plan} price={card.price} list={card.list} className={card.class} band={card.band} />
            </Col>
          ))}
          </Row>
      </Container>
    </section>
  );
};

export default Pricing;
