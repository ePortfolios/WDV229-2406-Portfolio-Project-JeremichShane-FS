import { Link } from "react-router-dom";
import * as p from "../../constants/routes";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to={p.SCHEDULE} className="navbar__link">
            Schedule
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={p.STANDINGS} className="navbar__link">
            Standings
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={p.TICKETS} className="navbar__link">
            Tickets
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={p.LOGIN} className="navbar__link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
