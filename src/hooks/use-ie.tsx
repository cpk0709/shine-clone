import { useEffect, useState } from 'react';

export const useIe = () => {
  const [isIe, setIsIe] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const agent = window.navigator.userAgent.toLowerCase();
      const isInternetExploer =
        (window.navigator.appName === 'Netscape' &&
          navigator.userAgent.search('Trident') !== -1) ||
        agent.includes('msie');
      setIsIe(isInternetExploer);
    }
  }, []);

  return isIe;
};
