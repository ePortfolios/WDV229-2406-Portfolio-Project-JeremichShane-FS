import PropTypes from "prop-types";
import ArticlesContextProvider from "./ArticlesContext";
import FixturesContextProvider from "./FixturesContext";
import StandingsContextProvider from "./StandingsContext";

export const AppContextProvider = ({ children }) => {
  return (
    <StandingsContextProvider>
      <ArticlesContextProvider>
        <FixturesContextProvider>{children}</FixturesContextProvider>
      </ArticlesContextProvider>
    </StandingsContextProvider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
