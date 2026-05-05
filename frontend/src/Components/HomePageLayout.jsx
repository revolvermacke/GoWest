import "./HomePageLayout.css";
import { useTickets } from "../Hooks/useTickets";
import qrticket from "../Components/QrTicket";

const HomePageLayout = () => {
  const { tickets, buyTicket } = useTickets();

  return (
    <>
      <div className="_mainContent">
        <h2>Buy tickets</h2>
        <p>Choose your ticket type below</p>
      </div>

      <div className="_ticketCard">
        <div className="_ticketInfo">
          <div className="_clockIcon">
            <i class="fa-regular fa-clock"></i>
          </div>
          <div className="_timeTicket">
            <span>30 Minutes</span>
            <span className="_ticketType">Overall ticket</span>
          </div>
        </div>
        <div className="_buyTicket">
          <span className="_price">
            10 <span className="_currency">SEK</span>
          </span>
          <button onClick={() => buyTicket("30min")}>Buy Ticket</button>
        </div>
      </div>

      <div className="_ticketCard">
        <div className="_ticketInfo">
          <div className="_clockIcon">
            <i class="fa-regular fa-clock"></i>
          </div>
          <div className="_timeTicket">
            <span>60 Minutes</span>
            <span className="_ticketType">Overall ticket</span>
          </div>
        </div>
        <div className="_buyTicket">
          <span className="_price">
            20 <span className="_currency">SEK</span>
          </span>
          <button onClick={() => buyTicket("60min")}>Buy Ticket</button>
        </div>
      </div>

      {tickets && <QrTicket ticket={tickets} />}
    </>
  );
};

export default HomePageLayout;
