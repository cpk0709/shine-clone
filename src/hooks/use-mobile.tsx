import { useEffect, useState } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.isMobile?.any || false);
    }
  }, []);

  return isMobile;
};

export default useMobile;
