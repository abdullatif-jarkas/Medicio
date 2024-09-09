import { Accordion } from "react-bootstrap";
import "./MyAccordion.css";

const MyAccordion = ({ data }) => {
  return (
    <Accordion>
      {data.map((item, index) => (
        <Accordion.Item key={index} className="mb-3" eventKey={index}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.text}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
