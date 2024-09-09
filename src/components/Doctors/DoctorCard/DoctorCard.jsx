import './DoctorCard.css'

const DoctorCard = ({ img, name, spec }) => {
  return (
    <div className='doctor-card shadow-1 '>
      <div className="doctor-img">
        <img src={img} className='w-100' loading="lazy" alt="doctor" />
      </div>
      <div className="doctor-info">
        <h5>{name}</h5>
        <p>{spec}</p>
      </div>
    </div>
  )
}

export default DoctorCard