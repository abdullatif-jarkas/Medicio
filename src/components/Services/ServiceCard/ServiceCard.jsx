import "./ServiceCard.css";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="service-card text-center p-4 mt-4">
      <div className="service-icon shadow-1 d-flex justify-content-center align-items-center rounded-circle mx-auto mb-4">
        {icon}
      </div>
      <h3 className="fw-bold position-relative fs-4">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
