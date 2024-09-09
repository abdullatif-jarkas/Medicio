import { Col, Container, Form, Row } from "react-bootstrap";
import "./Appointment.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import MainBtn from "../MainBtn/MainBtn";

const Appointment = () => {
  return (
    <section className="appointment">
      <Container>
        <SectionTitle
          title="MAKE AN APPOINTMENT"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Form>
          <Row className="pb-2 mt-5">
            <Col md={4}>
              <Form.Control type="text" placeholder="Your Name" />
            </Col>
            <Col md={4}>
              <Form.Control type="email" placeholder="Your Email" className="mt-4 mt-md-0" />
            </Col>
            <Col md={4}>
              <Form.Control type="tel" placeholder="Your Phone" className="mt-4 mt-md-0" />
            </Col>
          </Row>
          <Row className="my-3 pb-2">
            <Col md={4}>
              <Form.Control type="datetime-local" />
            </Col>
            <Col md={4}>
              <Form.Select aria-label="Default select example" className="mt-4 mt-md-0">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>{" "}
            </Col>
            <Col md={4}>
              <Form.Select aria-label="Default select example"className="mt-4 mt-md-0">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Control as="textarea" rows={5} placeholder="Message (Optional)" className="mt-4 mt-md-0 mb-4" />
          <div className="form-btn d-flex justify-content-center">
            <MainBtn />
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Appointment;
