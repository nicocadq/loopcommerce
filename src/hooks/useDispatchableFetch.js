import { useCallback, useState } from "react";

export const useDispatchableFetch = (endpoint, options) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}${endpoint}`,
        options
      );

      if (res.status < 200 || res.status >= 400) throw Error(res.body.errors);

      const resData = await res.json();
      setData(resData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [endpoint, options]);

  return { data, loading, error, execute };
};
