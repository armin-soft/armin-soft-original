
import { useState, useEffect } from 'react';
import { useBrowserNotification } from './useBrowserNotification';

export const useWelcomeNotification = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const { showNotification } = useBrowserNotification();
  
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenWelcome) {
      setTimeout(async () => {
        setShowWelcome(true);
        localStorage.setItem('hasSeenWelcome', 'true');
        
        // نمایش نوتیفیکیشن مرورگر
        await showNotification("به وب‌سایت آرمین سافت خوش آمدید", {
          body: "امیدواریم تجربه خوبی داشته باشید",
          icon: "/Assets/Image/Logo.png",
          tag: "welcome",
          silent: false
        });
      }, 1000);
    }
  }, [showNotification]);

  return {
    showWelcome,
    setShowWelcome
  };
};
