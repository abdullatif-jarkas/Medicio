import { Button, Container } from 'react-bootstrap'
import './NeedHelp.css'

const NeedHelp = ({ title, text }) => {
  return (
    <section className='need-help text-center main-bg-color text-white'>
      <Container>
        <h3 className='text-white'>{title}</h3>
        <p>{text}</p>
        <button className="btn btn-outline-light rounded-1 mt-4 btn-lg px-5">Make an Appointment</button>
      </Container>
    </section>
  )
}

export default NeedHelp