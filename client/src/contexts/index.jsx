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
            domain="dev-sdhlg782szpgf7ug.us.auth0.com"
            clientId="KuFg0RMS0BRkwo9lsVGox6A6ZAjlWW1H"
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
