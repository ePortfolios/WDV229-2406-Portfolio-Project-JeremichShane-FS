import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import API from "../API";

export const FixturesContext = createContext();

const FixturesContextProvider = ({ children }) => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchFixtures = async () => {
      try {
        const res = await API.getFixtures({ signal: abortController });
        setFixtures(res);
      } catch (err) {
        console.log("Fetch Error:", err);
      }
    };
    fetchFixtures();

    return () => abortController.abort();
  }, []);

  return <FixturesContext.Provider value={{ fixtures }}>{children}</FixturesContext.Provider>;
};

FixturesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FixturesContextProvider;
