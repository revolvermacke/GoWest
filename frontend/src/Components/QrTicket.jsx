import { useEffect, useState } from "react";
import "./QrTicket.css";

const QrTicket = ({ ticket }) => {
  const [timeLeft, setTimeLeft] = useState("");

  if (!ticket) return null;

  useEffect(() => {
    function updateTimer() {
      const now = new Date();
      const validUntil = new Date(ticket.validUntil);

      const diff = validUntil - now;

      if (diff <= 0) {
        setTimeLeft("Expired");
        return;
      }

      const minutes = Math.floor(diff / 1000 / 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${minutes}:${seconds.toString().padStart(2, "0")}`
      );
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [ticket.validUntil]);

  return (
    <div className="_qrCard">
      <div className="_qrCardValid">
        <span></span>
        <p className="_valid">{ticket.status}</p>
      </div>

      <div className="_qrBorder">
        <img
          src={`data:image/png;base64,${ticket.qrCodeBase64}`}
          alt="QR Code"
        />
      </div>

      <div className="_qrTimer">
        <p>Time left: {timeLeft}</p>
      </div>
    </div>
  );
};

export default QrTicket;