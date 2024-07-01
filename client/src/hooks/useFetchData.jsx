import { useCallback, useEffect, useState } from "react";

const useFetchData = (apiFunc, dependencies = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = useCallback(() => {
    setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1);
  }, []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await apiFunc();
        if (isMounted) {
          setData(res);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, refetchIndex]);

  return { data, error, loading, refetch };
};

export default useFetchData;
