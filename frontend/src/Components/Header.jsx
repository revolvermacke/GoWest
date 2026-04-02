import "./Header.css";
import Logotype from "./Logotype";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <div className="_header-wrapper">
      <div className="_header-container _container">
        <div className="_header">
          <Logotype />
        </div>
        <div className="_header-content">
          <h1 className="_header-title">GoWest</h1>
        </div>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;