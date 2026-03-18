import QrTicket from "../Components/QrTicket";

const YourTicket = () => {
  return (
    <div className="_container">
      <div className="_ticketTop">
        <h3>My tickets</h3>
        <p>You have no active tickets. Buy a ticket to get started!</p>
      </div>

      <div className="_qrWrapper">
        <QrTicket />
      </div>
    </div>
  );
};

export default YourTicket;