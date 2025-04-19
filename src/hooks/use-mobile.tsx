
import { useEffect, useState } from "react";

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // اجرای تابع بررسی موبایل در ابتدا
    checkIfMobile();

    // افزودن event listener برای تغییر سایز پنجره
    window.addEventListener("resize", checkIfMobile);

    // پاکسازی event listener هنگام unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
}
