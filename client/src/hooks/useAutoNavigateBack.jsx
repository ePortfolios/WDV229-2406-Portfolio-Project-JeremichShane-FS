import { useEffect } from "react";

const useAutoNavigateBack = (navigate, delay) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate, delay]);
};

export default useAutoNavigateBack;
