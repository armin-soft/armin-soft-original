
import { useEffect, useState } from "react";

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    // اجرای تابع بررسی اندازه صفحه در ابتدا
    checkScreenSize();

    // افزودن event listener برای تغییر سایز پنجره
    window.addEventListener("resize", checkScreenSize);

    // پاکسازی event listener هنگام unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isMobile;
}

export function useIsTablet(): boolean {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    // اجرای تابع بررسی اندازه صفحه در ابتدا
    checkScreenSize();

    // افزودن event listener برای تغییر سایز پنجره
    window.addEventListener("resize", checkScreenSize);

    // پاکسازی event listener هنگام unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isTablet;
}
