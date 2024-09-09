import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
  return (
    <footer className="text-center text-md-start">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h4 className="second-color logo fw-bold">Medicio</h4>
            <div className="footer-info pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <span className="fw-bold">Phone:</span> +1 5589 55488 55
              </p>
              <p>
                <span className="fw-bold">Email:</span> info@example.com
              </p>
            </div>
            <div className="social-icons d-flex mt-4 justify-content-center justify-content-md-start">
              <div className="social-icon d-flex justify-content-center align-items-center rounded-circle">
                <FaXTwitter />
              </div>
              <div className="social-icon d-flex justify-content-center align-items-center rounded-circle">
                <FaFacebook />
              </div>
              <div className="social-icon d-flex justify-content-center align-items-center rounded-circle">
                <FaInstagram />
              </div>
              <div className="social-icon d-flex justify-content-center align-items-center rounded-circle">
                <FaLinkedin />
              </div>
            </div>
          </Col>
          <Col lg={2} md={3} className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Terms of service</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={3} className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="">Web Design</a>
              </li>
              <li>
                <a href="">Web Development</a>
              </li>
              <li>
                <a href="">Product Management</a>
              </li>
              <li>
                <a href="">Marketing</a>
              </li>
              <li>
                <a href="">Graphic Design</a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={3} className="footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li>
                <a href="">Molestiae accusamus iure</a>
              </li>
              <li>
                <a href="">Excepturi dignissimos</a>
              </li>
              <li>
                <a href="">Suscipit distinctio</a>
              </li>
              <li>
                <a href="">Dilecta</a>
              </li>
              <li>
                <a href="">Sit quas consectetur</a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={3} className="footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li>
                <a href="">Ipsam</a>
              </li>
              <li>
                <a href="">Laudantium dolorum</a>
              </li>
              <li>
                <a href="">Dinera</a>
              </li>
              <li>
                <a href="">Trodelas</a>
              </li>
              <li>
                <a href="">Flexo</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Copyright />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
