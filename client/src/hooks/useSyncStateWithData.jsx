import { useEffect, useState } from "react";

function useSyncStateWithData(data, initialState = []) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  return [state, setState];
}

export default useSyncStateWithData;
