import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import API from "../API";

export const StandingsContext = createContext();

const StandingsContextProvider = ({ children }) => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchStandings = async () => {
      try {
        const res = await API.getStandings({ signal: abortController.signal });
        setStandings(res);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
        }
      }
    };
    fetchStandings();

    return () => abortController.abort();
  }, []);

  return <StandingsContext.Provider value={{ standings }}>{children}</StandingsContext.Provider>;
};

StandingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StandingsContextProvider;
