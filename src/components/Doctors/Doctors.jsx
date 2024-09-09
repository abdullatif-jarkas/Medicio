import { Col, Container, Row } from "react-bootstrap";
import "./Doctors.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import DoctorCard from "./DoctorCard/DoctorCard";
import { doctorsData } from "../../data/doctorsData";

const Doctors = () => {
  return (
    <section className="doctors second-bg" id="doctors">
      <Container>
        <SectionTitle
          title="Doctors"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Row className="mt-5 gy-4">
          {doctorsData.map((doc, index) => (
            <Col key={index} md={6} lg={3}>
              <DoctorCard img={doc.img} name={doc.name} spec={doc.spec} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Doctors;
