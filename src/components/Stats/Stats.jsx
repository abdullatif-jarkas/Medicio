import { Col, Container, Row } from "react-bootstrap";
import "./Stats.css";
import Stat from './Stat/Stat'

const Stats = ({ data }) => {
  return (
    <section className="stats">
      <Container>
        <Row>
          {data.map((stat, index) => (
            <Col key={index} md={6} lg={3}>
              <Stat icon={stat.icon} num={stat.num} text={stat.text} /> 
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
