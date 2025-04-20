
export const useBrowserNotification = () => {
  const requestPermission = async () => {
    if (!("Notification" in window)) {
      console.log("این مرورگر از نوتیفیکیشن پشتیبانی نمی‌کند");
      return false;
    }
    
    if (Notification.permission === "granted") {
      return true;
    }
    
    const permission = await Notification.requestPermission();
    return permission === "granted";
  };

  const showNotification = async (title: string, options?: NotificationOptions) => {
    const hasPermission = await requestPermission();
    
    if (hasPermission) {
      new Notification(title, options);
      return true;
    }
    return false;
  };

  return { showNotification };
};
