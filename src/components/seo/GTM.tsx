
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const GTMPageTracker: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname,
          title: document.title,
          language: 'fa',
          market: 'IR'
        }
      });
    }
  }, [location]);

  return null;
};

export const initGTM = (gtmId: string): void => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  const gtmScript = document.createElement('script');
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  
  document.head.insertBefore(gtmScript, document.head.firstChild);
  
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
    language: 'fa',
    market: 'IR'
  });
};
