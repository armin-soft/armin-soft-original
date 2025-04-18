
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// این کامپوننت برای ارسال رویداد تغییر صفحه به GTM استفاده می‌شود
export const GTMPageTracker: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // فرستادن رویداد تغییر صفحه به GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname,
          title: document.title
        }
      });
    }
  }, [location]);

  return null;
};

// برای اضافه کردن اسکریپت‌های GTM در زمان اجرا
export const initGTM = (gtmId: string): void => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
};
