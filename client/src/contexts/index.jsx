import { Auth0Provider } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import ArticlesContextProvider from "./ArticlesContext";
import FixturesContextProvider from "./FixturesContext";
import StandingsContextProvider from "./StandingsContext";

export const AppContextProvider = ({ children }) => {
  return (
    <StandingsContextProvider>
      <ArticlesContextProvider>
        <FixturesContextProvider>
          <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}>
            {children}
          </Auth0Provider>
        </FixturesContextProvider>
      </ArticlesContextProvider>
    </StandingsContextProvider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
