import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Contact.css";
import { SlLocationPin } from "react-icons/sl";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import ContactCard from "./ContactCard/ContactCard";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionTitle
        title="Contact"
        text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <iframe
        className="mt-5"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9869.351094910646!2d2.1372502794283648!3d41.383920319678545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f576297baf%3A0x44f65330fe1b04b9!2z2YPYp9mF2Kgg2YbZiA!5e1!3m2!1sar!2s!4v1725643947308!5m2!1sar!2s"
        width="100%"
        height="370"
        loading="lazy"
      />
      <Container>
        <Row className="mt-5">
          <Col lg={6}>
            <Row>
              <Col xs={12}>
                <ContactCard
                  icon={<SlLocationPin className="icon fs-3 main-color" />}
                  title="Address"
                  text="A108 Adam Street, New York, NY 535022"
                />
              </Col>
              <Col md={6} className="mt-4">
                <ContactCard
                  icon={<BsTelephone className="icon fs-3 main-color" />}
                  title="Call Us"
                  text="+1 5589 55488 55"
                />
              </Col>
              <Col md={6} className="mt-4">
                <ContactCard
                  icon={<BsEnvelope className="icon fs-3 main-color" />}
                  title="Email Us"
                  text="info@example.com"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Form className="shadow-1 p-4 mt-4 mt-lg-0">
              <Row>
                <Col md={6}>
                  <Form.Control type="text" placeholder="Your Name" />
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                  <Form.Control type="email" placeholder="Your Email" />
                </Col>
                <Col xs={12} className="mt-4">
                  <Form.Control type="text" placeholder="Subject" />
                </Col>
                <Col xs={12} className="mt-4">
                  <Form.Control as="textarea" rows={4} />
                </Col>
                <Col className="text-center mt-4">
                  <Button type="submit" className="contact-submit-btn">Send Message</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
