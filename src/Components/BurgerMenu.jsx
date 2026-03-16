import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <button className="_burger-btn" onClick={() => setOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </button>

      {open && (
        <div className="_menu-overlay" onClick={() => setOpen(false)}>
          <div
            className="_menu-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="_menu-handle"></div>

            <button
              className="_menu-item"
              onClick={() => go("/tickets")}
            >
              Mina biljetter
            </button>

            <button
              className="_menu-item"
              onClick={() => go("/")}
            >
              Köp biljett
            </button>

            <button
              className="_menu-item"
              onClick={() => go("/help")}
            >
              Hjälp
            </button>

            <button
              className="_menu-close"
              onClick={() => setOpen(false)}
            >
              Stäng
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;