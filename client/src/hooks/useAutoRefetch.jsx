import { useEffect } from 'react';

function useAutoRefetch(data, refetch) {
  useEffect(() => {
    refetch();
  }, [data, refetch]);
}

export default useAutoRefetch;