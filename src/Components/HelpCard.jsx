import "./HelpCard.css";

const HelpCard = () => {
  return (
    <div>
      <div className="_helpCard">
        <div className="_helpCardIcon">
          <i className="fa-regular fa-clock"></i>
        </div>
        <div className="_helpInfo">
          <h4>How long is my ticket valid?</h4>
          <p>
            Your ticket is valid from the moment of purchase. A 30-minute ticket
            lasts 30 minutes and a 60-minute ticket lasts 60 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
