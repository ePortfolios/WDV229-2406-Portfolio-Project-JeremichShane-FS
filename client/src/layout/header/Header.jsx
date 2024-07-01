import { Link } from "react-router-dom";
import { Navbar } from "../";
import MLSlogo from "../../assets/img/MLS-Crest-FullColor.png";
import { ROOT } from "../../constants/routes";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link to={ROOT}>
          <div className="header__logo">
            <img src={MLSlogo} alt="MLS Logo" className="header__logo-img" />
            <span className="header__logo-text">Hub</span>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
