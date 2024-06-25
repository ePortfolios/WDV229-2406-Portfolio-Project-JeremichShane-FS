import { useEffect, useState } from "react";

function useSyncStateWithData(initialState, data) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  return [state, setState];
}

export default useSyncStateWithData;
