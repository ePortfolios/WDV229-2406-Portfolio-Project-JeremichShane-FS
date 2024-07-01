import { useAuth0 } from "@auth0/auth0-react";
import { RiDashboardHorizontalLine, RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="profile">
      <div className="profile__hover-container">
        <img src={user.picture} alt={`${user.name}'s Profile picture`} className="profile__img" />
        <div className="profile__dropdown-menu">
          <Link to="/dashboard" className="profile__dropdown-item">
            <span className="profile__dropdown-item-span">
              <RiDashboardHorizontalLine className="profile__dropdown-item-icon" />
              Dashboard
            </span>
          </Link>
          <div
            className="profile__dropdown-item"
            onClick={() => {
              const currentPath = window.location.pathname + window.location.search;
              const returnToUrl = `http://localhost:5173${currentPath}`;
              logout({ returnTo: returnToUrl });
            }}>
            <span className="profile__dropdown-item-span">
              <RiLogoutBoxRLine className="profile__dropdown-item-icon" />
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
