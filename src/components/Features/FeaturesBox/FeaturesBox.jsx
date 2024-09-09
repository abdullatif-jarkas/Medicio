import "./FeaturesBox.css";

const FeaturesBox = ({ icon, title, text }) => {
  return (
    <div className="features-box mt-5 d-flex">
      <div className="features-icon shadow-1 me-4 flex-shrink-0 d-flex justify-content-center align-items-center rounded">{icon}</div>
      <div className="features-box-info">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeaturesBox;
