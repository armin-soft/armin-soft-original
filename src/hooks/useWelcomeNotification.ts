
import { useState, useEffect } from 'react';

export const useWelcomeNotification = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenWelcome) {
      setTimeout(() => {
        setShowWelcome(true);
        localStorage.setItem('hasSeenWelcome', 'true');
      }, 1000);
    }
  }, []);

  return {
    showWelcome,
    setShowWelcome
  };
};
