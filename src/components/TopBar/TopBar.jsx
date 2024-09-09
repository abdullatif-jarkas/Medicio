import { FaRegClock } from 'react-icons/fa'
import './TopBar.css'
import { CgSmartphone } from 'react-icons/cg'
import { Container } from 'react-bootstrap'

const TopBar = ({ date, number }) => {
  return (
    <div className='top-bar d-flex align-items-center'>
      <Container>
        <div className="top-bar-content d-flex justify-content-center justify-content-md-between">
          <p className='d-flex align-items-center d-none d-md-block'><FaRegClock className='me-1 fs-5'/>{date}</p>
          <p className='d-flex align-items-center'><CgSmartphone className='me-1 fs-5' />Call us now {number}</p>
        </div>
      </Container>
    </div>
  )
}

export default TopBar