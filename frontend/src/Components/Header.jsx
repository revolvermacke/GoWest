import "./Header.css";
import Logotype from "./Logotype";
import BurgerMenu from "./BurgerMenu";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const token = localStorage.getItem("token");

  let user = null;

  if (token) {
    user = jwtDecode(token);
  }

  return (
    <div className="_header-wrapper">
      <div className="_header-container _container">
        <div className="_header-left">
          <div className="_header">
            <Logotype />
          </div>

          <div className="_header-content">
            <h1 className="_header-title">GoWest</h1>
          </div>
        </div>

        <div className="_header-right">
          {user && (
            <span className="_userClaim">
              <i className="fa-regular fa-user"></i>
              {user.email}
            </span>
          )}

          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;