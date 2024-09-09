import "./ContactCard.css";

const ContactCard = ({ icon, title, text }) => {
  return (
    <div className="contact-card shadow-1 text-center py-4">
      <div className="icon-container mx-auto">{icon}</div>
      <h3 className="fw-bold">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ContactCard;
