import "./HelpCard.css";

const HelpCard = ({ icon, title, text, isLast }) => {
  return (
    <div className={`_helpCard ${isLast ? "lastCard" : ""}`}>
      <div className={`_helpCardIcon ${isLast ? "lastIcon" : ""}`}>
        <i className={icon}></i>
      </div>
      <div className="_helpInfo">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HelpCard;