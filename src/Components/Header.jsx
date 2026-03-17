import "./Header.css";
import Logotype from "./Logotype";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <>
      <div className="_header-container">
        <div className="_header">
          <Logotype />
          {/* <i class="fa-solid fa-bus"></i> */}
        </div>
        <div className="_header-content">
          <h1 className="_header-title">GoWest</h1>
        </div>
        <BurgerMenu />
      </div>
    </>
  );
};

export default Header;
