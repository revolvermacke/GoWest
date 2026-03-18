import "./QrTicket.css";

const QrTicket = () => {
  return (
    <div className="_qrCard">
        <div className="_qrCardValid">
            <span></span>
            <p className="_valid">Valid Ticket</p>
        </div>
      <div className="_qrBorder">
        <div>qrkod här</div>
      </div>
    </div>
  )
}

export default QrTicket
