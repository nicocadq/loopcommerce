import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const res = await fetch(url);
        const resData = await res.json();
        setData(resData);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    };

    fetchResource();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
