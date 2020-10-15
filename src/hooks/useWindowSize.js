import { useState, useEffect } from "react";

const getSizes = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSizes());

  const handleResize = () => {
    setWindowSize(getSizes());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
