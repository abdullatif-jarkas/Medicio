import { Col, Container, Row } from 'react-bootstrap'
import './Features.css'
import Img from './../../assets/img/features.jpg'
import FeaturesBox from './FeaturesBox/FeaturesBox'
import { featuresData } from '../../data/featuresData'

const Features = () => {
  return (
    <section className='features'>
      <Container>
        <Row className='justify-content-around'>
          <Col lg={6}>
            <img src={Img} className='w-100 h-100 object-cover' alt="" />
          </Col>
          <Col lg={5} className='mt-4 mt-lg-0'>
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p className='mb-3'>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
            <div className="features-boxes">
              {
                featuresData.map((item, index) => (
                  <FeaturesBox icon={item.icon} title={item.title} text={item.text} key={index} />
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features