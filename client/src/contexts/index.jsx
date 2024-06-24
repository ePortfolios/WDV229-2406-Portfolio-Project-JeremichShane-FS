import PropTypes from "prop-types";
import ArticlesContextProvider from "./ArticlesContext";
import StandingsContextProvider from "./StandingsContext";

export const AppContextProvider = ({ children }) => {
  return (
    <StandingsContextProvider>
      <ArticlesContextProvider>{children}</ArticlesContextProvider>
    </StandingsContextProvider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
