import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { ROOT } from "../constants/routes";

const AuthorizedRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? children : <Navigate to={ROOT} />;
};

AuthorizedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorizedRoutes;
