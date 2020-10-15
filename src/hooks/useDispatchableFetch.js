import { useCallback, useState } from "react";

import getHeaders from "../utils/getHeaders";

export const useDispatchableFetch = (endpoint, options) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const [headersData, setHeadersData] = useState({});

  const execute = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}${endpoint}`,
        options
      );

      if (res.status < 200 || res.status >= 400) {
        const { errors } = await res.json();
        const errorMessage = Object.entries(errors[0]);
        throw Error(errorMessage);
      }

      setHeadersData(getHeaders(res));
      const resData = await res.json();
      setData(resData);
    } catch ({ message }) {
      setServerErrors((previousServerErrors) => [
        ...previousServerErrors,
        message,
      ]);
    } finally {
      setLoading(false);
    }
  }, [endpoint, options]);

  return { data, loading, serverErrors, execute, headersData };
};
