import "./TicketInformation.css";

const TicketInformation = () => {
  return (
    <div className="_ticketInfoCard">
      <div className="_ticketIcon">
        <i class="fa-solid fa-question"></i>
      </div>
      <div className="_Info">
        <h3>How it works</h3>
        <p>Purchase a ticket and show the QR code to the driver or ticket inspector. The ticket is valid from the moment of purchase until the timer expires.</p>
      </div>
    </div>
  )
}

export default TicketInformation
