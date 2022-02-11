import { useState, useEffect } from 'react';

function useWidth() {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      return width > 815 ? setIsMobile(false) : setIsMobile(true);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  useEffect(() => {
    const resizeMobile = () => (width > 815 ? setIsMobile(false) : setIsMobile(true));
    resizeMobile();
  }, [width]);

  return [isMobile, width];
}

export default useWidth;
