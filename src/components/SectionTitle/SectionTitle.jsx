import './SectionTitle.css'

const SectionTitle = ({ title, text }) => {
  return (
    <div className='section-title text-center'>
      <h2 className='position-relative'>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default SectionTitle