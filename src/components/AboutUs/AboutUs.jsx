import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutUs.css";
import AboutImg from "./../../assets/img/about.jpg";
import { FaPlay } from "react-icons/fa";
import { TbChecks } from "react-icons/tb";

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <Container>
        <SectionTitle
          title="About Us"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Row className="mt-5">
          <Col lg={6}>
            <div className="about-img position-relative">
              <img src={AboutImg} className="w-100" alt="about-img" />
              <a
                href="#"
                className="play-btn d-flex justify-content-center align-items-center"
              >
                <FaPlay className="text-white" />
              </a>
            </div>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="mt-4 mb-3">
              <li className="d-flex mb-2">
                <TbChecks className="flex-shrink-0 main-color me-2" />
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li className="d-flex mb-2">
                <TbChecks className="flex-shrink-0 main-color me-2" />
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li className="d-flex mb-2">
                <TbChecks className="flex-shrink-0 main-color me-2" />
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </span>
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
