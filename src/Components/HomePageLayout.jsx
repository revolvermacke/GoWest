import "./HomePageLayout.css";

const HomePageLayout = () => {
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
          <span>10 SEK</span>
          <button>Buy Ticket</button>
        </div>
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
          <span>10 SEK</span>
          <button>Buy Ticket</button>
        </div>
      </div>
    </>
  );
};

export default HomePageLayout;
