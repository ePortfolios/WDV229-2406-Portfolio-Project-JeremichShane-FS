import { useAuth0 } from "@auth0/auth0-react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Profile } from "../../components";
import * as p from "../../constants/routes";
import "./Navbar.scss";

const NavbarComponent = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const renderAuthOption = () => {
    if (isLoading) {
      return null;
    }

    if (!isAuthenticated) {
      return (
        <li className="navbar__item">
          <div onClick={() => loginWithRedirect()} className="navbar__link">
            Login
          </div>
        </li>
      );
    }

    return (
      <li className="navbar__item">
        <Profile />
      </li>
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink to={p.SCHEDULE} className="navbar__link">
            Schedule
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={p.STANDINGS} className="navbar__link">
            Standings
          </NavLink>
        </li>
        {renderAuthOption()}
      </ul>
    </nav>
  );
};

const Navbar = memo(NavbarComponent);
Navbar.displayName = "Navbar";

export default Navbar;
