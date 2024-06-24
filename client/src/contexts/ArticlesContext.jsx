import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import API from "../API";

export const ArticlesContext = createContext();

const ArticlesContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchArticles = async () => {
      try {
        const res = await API.getArticles({ signal: abortController.signal });
        setArticles(res);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
        }
      }
    };
    fetchArticles();

    return () => abortController.abort();
  }, []);

  return <ArticlesContext.Provider value={{ articles }}>{children}</ArticlesContext.Provider>;
};

ArticlesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArticlesContextProvider;
