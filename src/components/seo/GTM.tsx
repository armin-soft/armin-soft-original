
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// We'll remove the global declaration since it's already defined in vite-env.d.ts
// This avoids the duplicate declaration error

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
  // Check if GTM is already initialized
  if (document.getElementById('gtm-script')) {
    return;
  }
  
  // Initialize dataLayer if it doesn't exist
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  // Create GTM script tag
  const gtmScript = document.createElement('script');
  gtmScript.id = 'gtm-script';
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  
  // Add script to head
  document.head.insertBefore(gtmScript, document.head.firstChild);
  
  // Push initial dataLayer event
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
    language: 'fa',
    market: 'IR'
  });
  
  // Add noscript iframe for users with JavaScript disabled
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
};
