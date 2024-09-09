import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import "./Departments.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const Departments = ({ links, content }) => {
  return (
    <section className="departments" id="departments">
      <Container>
        <SectionTitle
          title="Departments"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="mt-5">
            <Col lg={3}>
              <Nav variant="pills" className="flex-lg-column">
                {links.map((link, index) => (
                  <Nav.Item key={index} className="flex-grow-1 text-center text-lg-start">
                    <Nav.Link
                      className="rounded-0 bg-white third-color fw-bold"
                      eventKey={link.key}
                    >
                      {link.text}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content>
                {content.map((item, index) => (
                  <Tab.Pane key={index} eventKey={item.key}>
                    <Row className="mt-4 mt-lg-0">
                      <Col lg={8} className="order-1 order-lg-0">
                        <h3>{item.title}</h3>
                        <p>
                          {item.text1}
                        </p>
                        <p>
                          {item.text2}
                        </p>
                      </Col>
                      <Col lg={4}>
                        <img src={item.img} className="w-100" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Departments;
