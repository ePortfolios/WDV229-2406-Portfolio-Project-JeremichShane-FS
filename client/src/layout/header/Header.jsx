import MLSlogo from "../../assets/img/MLS-Crest-FullColor.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo-container">
          <img src={MLSlogo} alt="MLS Logo" className="header__logo-container__img" />
          <span className="header__logo-text">Hub</span>
        </div>
        <h1 className="header__navbar">navbar</h1>
      </div>
    </header>
  );
};

export default Header;
