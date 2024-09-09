import { Card, Col, Container, Row } from "react-bootstrap";
import "./FeaturedServices.css";

const FeaturedServices = ({ data }) => {
  return (
    <section className="featured-services">
      <Container>
        <Row>
          {data.map((card, index) => (
            <Col key={index} md={6} xl={3}>
              <Card className="card border-0 px-3 py-4 shadow-1 position-relative overflow-hidden">
                <Card.Body className="z-1">
                  {card.icon}
                  <h4 className="mb-3">{card.title}</h4>
                  <Card.Text>
                    {card.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedServices;
