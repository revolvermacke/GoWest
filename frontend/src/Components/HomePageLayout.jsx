import "./HomePageLayout.css";
import { useState } from "react";
import { useTickets } from "../Hooks/useTickets";
import { useNavigate } from "react-router-dom";

const HomePageLayout = () => {
  const { buyTicket } = useTickets();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleBuyClick = type => {
    setSelectedTicket(type);
    setShowModal(true);
  };

  const confirmPurchase = async () => {
    await buyTicket(selectedTicket);
    setShowModal(false);
    navigate("/tickets");
  };

  const cancelPurchase = () => {
    setShowModal(false);
    setSelectedTicket(null);
  };

  return (
    <>
      <div className="_mainContent">
        <h2>Buy tickets</h2>
        <p>Choose your ticket type below</p>
      </div>

      {/* 30 min */}
      <div className="_ticketCard">
        <div className="_ticketInfo">
          <div className="_clockIcon">
            <i className="fa-regular fa-clock"></i>
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

          <button onClick={() => handleBuyClick("30min")}>
            Buy Ticket
          </button>
        </div>
      </div>

      {/* 60 min */}
      <div className="_ticketCard">
        <div className="_ticketInfo">
          <div className="_clockIcon">
            <i className="fa-regular fa-clock"></i>
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

          <button onClick={() => handleBuyClick("60min")}>
            Buy Ticket
          </button>
        </div>
      </div>

      {/* Confirmation modal */}
      {showModal && (
        <div className="_modalOverlay">
          <div className="_modal">
            <h3>Bekräfta köp</h3>

            <p>Är du säker på att du vill slutföra bokningen?</p>

            <div className="_modalButtons">
              <button onClick={confirmPurchase}>
                Ja, slutför
              </button>

              <button onClick={cancelPurchase}>
                Avbryt
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePageLayout;