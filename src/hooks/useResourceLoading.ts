
import { useEffect, useState } from "react";
import { toPersianNumbers } from "@/utils/numberUtils";

interface ResourceLoadingProps {
  onLoadingComplete: () => void;
}

interface Resource {
  name: string;
  loaded: boolean;
}

export function useResourceLoading({ onLoadingComplete }: ResourceLoadingProps) {
  const [resources, setResources] = useState<Resource[]>([
    { name: "استایل‌ها", loaded: false },
    { name: "فونت‌ها", loaded: false },
    { name: "کامپوننت‌ها", loaded: false },
    { name: "سرویس‌ها", loaded: false },
  ]);
  
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentLoadingItem, setCurrentLoadingItem] = useState("در حال بارگذاری...");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const simulateLoading = () => {
      if (currentIndex < resources.length) {
        const newResources = [...resources];
        newResources[currentIndex].loaded = true;
        setResources(newResources);
        setCurrentLoadingItem(newResources[currentIndex].name);
        
        // محاسبه پیشرفت
        const loadedCount = newResources.filter(r => r.loaded).length;
        const newProgress = Math.floor((loadedCount / resources.length) * 100);
        setProgress(newProgress);
        
        currentIndex++;
        // تاخیر تصادفی بین 300 تا 800 میلی‌ثانیه برای شبیه‌سازی بارگذاری
        const delay = Math.random() * 500 + 300;
        timer = setTimeout(simulateLoading, delay);
      } else {
        // همه منابع بارگذاری شده‌اند
        setProgress(100);
        setIsComplete(true);
        setCurrentLoadingItem("آماده شد!");
        
        // تاخیر کوتاه قبل از محو شدن
        timer = setTimeout(() => {
          setFadeOut(true);
          
          // صدا زدن onLoadingComplete بعد از انیمیشن محو شدن
          timer = setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }, 800);
      }
    };

    // شروع بارگذاری
    timer = setTimeout(simulateLoading, 500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return {
    progress,
    isComplete,
    fadeOut,
    resources,
    currentLoadingItem
  };
}
