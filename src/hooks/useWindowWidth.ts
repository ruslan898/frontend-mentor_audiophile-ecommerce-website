import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowWidthChange() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowWidthChange);

    return () => window.removeEventListener('resize', handleWindowWidthChange);
  }, []);

  return windowWidth;
}
