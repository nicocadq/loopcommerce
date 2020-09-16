import { useState, useEffect } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headersData, setHeadersData] = useState({});

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}${endpoint}`,
          {}
        );

        if (res.status < 200 || res.status >= 400) throw Error(res.body.errors);

        const getHeaders = () => {
          const headers = {};
          res.headers.forEach((value, name) => {
            headers[name] = value;
          });
          return headers;
        };

        setHeadersData(getHeaders);
        const resData = await res.json();
        setData(resData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [endpoint]);

  return { data, loading, error, headersData };
};
