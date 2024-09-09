import { Button } from "react-bootstrap";
import "./PricingCard.css";

const PricingCard = ({ plan, price, list, className, band }) => {
  return (
    <div className={`pricing-card text-center position-relative overflow-hidden ${className}`}>
      {band && <span className="band">{band}</span>}
      <h3>{plan}</h3>
      <h4 className="my-4"><sup>$</sup>{price}<span className="fs-6">/ month</span></h4>
      <ul>
        {list.map((item, index) => (
          <li key={index} className={`${item.class} mb-3`}>
            {item.text}
          </li>
        ))}
      </ul>
      <div className="pricing-btn">
        <Button variant="info text-white" className="main-bg-color border-0 py-2 px-4">Buy Now</Button>{" "}
      </div>
    </div>
  );
};

export default PricingCard;
