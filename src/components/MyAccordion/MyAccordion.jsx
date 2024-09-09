import { Accordion } from "react-bootstrap";
import "./MyAccordion.css";
import { useState } from "react";

const MyAccordion = ({ data }) => {
  const [toggle, setToggle] = useState(null);
  const handleClick = (index) => {
    if(index == toggle) setToggle(null)
    else setToggle(index);
  };
  return (
    <Accordion>
      {data.map((item, index) => (
        <Accordion.Item
          key={index}
          className="mb-3"
          style={{borderColor:  `${toggle == index? "var(--main-color)" : ""}`}}
          eventKey={index}
          onClick={() => handleClick(index)}
        >
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.text}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
