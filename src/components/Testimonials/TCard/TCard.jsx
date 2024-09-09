import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./TCard.css";
import { Card } from "react-bootstrap";

const TCard = ({ text, img, name, work }) => {
  return (
    <div className="t-card">
      <Card.Body>
        <Card.Text>
          <sup><FaQuoteLeft className="main-color me-2"/></sup>
          {text}
          <sub><FaQuoteRight className="main-color ms-2"/></sub>
        </Card.Text>
      </Card.Body>
      <img src={img} className="t-card-img" loading="lazy" alt="" />
      <h3 className="ms-5">{name}</h3>
      <p className="ms-5">{work}</p>
    </div>
  );
};

export default TCard;
