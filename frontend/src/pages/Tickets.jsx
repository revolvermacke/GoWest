import { useTickets } from "../hooks/useTickets";
import QrTicket from "../Components/QrTicket";

const YourTicket = () => {
  const { tickets } = useTickets();

  return (
    <div className="_container">
      <div className="_ticketTop">
        <h3>My tickets</h3>

        {tickets.length === 0 && (
          <p>You have no active tickets. Buy a ticket to get started!</p>
        )}
      </div>

      <div className="_qrWrapper">
        {tickets.length > 0 &&
          tickets.map(ticket => (
            <QrTicket key={ticket.id} ticket={ticket} />
          ))}
      </div>
    </div>
  );
};

export default YourTicket;