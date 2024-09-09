import "./Stat.css";

const Stat = ({ icon, num, text }) => {
  return (
    <div className="stat shadow-1 d-flex align-items-center">
      {icon}
      <div className="stat-info">
        <span className="fs-1 fw-bolder">{num}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Stat;
