import logo from "../Assets/DEMOSITE.svg";
import "../css/header.scss";
import HeaderNav from "./HeaderNav";

const Header = () => {

  return (
    <header>
      <div className="top-menu-list">
        <div>Menu | Some text | Another item | One more | And last one</div>
      </div>
      <div className="bottom-menu-list">
        <img src={logo} alt="demo site" />
        <HeaderNav />
        <div className="mobile-nav">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
    </header>
  );
};

export default Header;