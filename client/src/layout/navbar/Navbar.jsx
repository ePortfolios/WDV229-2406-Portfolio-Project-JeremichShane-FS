import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import * as p from "../../constants/routes";
import "./Navbar.scss";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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

        {!isAuthenticated ? (
          <li className="navbar__item">
            <div onClick={() => loginWithRedirect()} className="navbar__link">
              Login
            </div>
          </li>
        ) : (
          <li className="navbar__item">
            <div
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className="navbar__link">
              Logout
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
