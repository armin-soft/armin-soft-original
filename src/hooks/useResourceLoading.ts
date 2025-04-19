
import { useState, useEffect } from "react";

export interface ResourceStatus {
  name: string;
  loaded: boolean;
}

interface UseResourceLoadingProps {
  onLoadingComplete: () => void;
}

export const useResourceLoading = ({ onLoadingComplete }: UseResourceLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [resources, setResources] = useState<ResourceStatus[]>([
    { name: "فونت‌ها", loaded: false },
    { name: "تصاویر", loaded: false },
    { name: "استایل‌ها", loaded: false },
    { name: "اسکریپت‌ها", loaded: false }
  ]);
  const [currentLoadingItem, setCurrentLoadingItem] = useState("");

  const updateResourceStatus = (resourceName: string) => {
    setResources(prev => {
      const newResources = prev.map(resource => 
        resource.name === resourceName ? { ...resource, loaded: true } : resource
      );
      
      const loadedCount = newResources.filter(r => r.loaded).length;
      const newProgress = Math.round((loadedCount / newResources.length) * 100);
      setProgress(newProgress);
      setCurrentLoadingItem(resourceName);

      return newResources;
    });
  };

  useEffect(() => {
    const checkAllResourcesLoaded = () => {
      const allLoaded = resources.every(resource => resource.loaded);
      if (allLoaded) {
        setIsComplete(true);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onLoadingComplete, 500);
        }, 800);
      }
    };

    // بررسی بارگذاری فونت‌ها
    document.fonts.ready.then(() => {
      updateResourceStatus("فونت‌ها");
      checkAllResourcesLoaded();
    });

    // بررسی بارگذاری تصاویر
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;
    
    if (totalImages === 0) {
      updateResourceStatus("تصاویر");
      checkAllResourcesLoaded();
    } else {
      const imageLoadHandler = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          updateResourceStatus("تصاویر");
          checkAllResourcesLoaded();
        }
      };

      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', imageLoadHandler);
        }
      });

      if (loadedImages === totalImages) {
        updateResourceStatus("تصاویر");
        checkAllResourcesLoaded();
      }
    }

    // بررسی بارگذاری استایل‌ها
    const styleSheets = document.styleSheets;
    const checkStyleSheets = () => {
      const loadedStyleSheets = Array.from(styleSheets).filter(sheet => {
        try {
          return sheet.cssRules.length > 0;
        } catch (e) {
          return false;
        }
      }).length;

      if (loadedStyleSheets === styleSheets.length) {
        updateResourceStatus("استایل‌ها");
        checkAllResourcesLoaded();
      }
    };

    // بررسی بارگذاری اسکریپت‌ها
    const scripts = document.querySelectorAll('script');
    let loadedScripts = 0;
    const totalScripts = scripts.length;

    const scriptLoadHandler = () => {
      loadedScripts++;
      if (loadedScripts === totalScripts) {
        updateResourceStatus("اسکریپت‌ها");
        checkAllResourcesLoaded();
      }
    };

    scripts.forEach(script => {
      if (script.hasAttribute('async') || script.hasAttribute('defer')) {
        script.addEventListener('load', scriptLoadHandler);
      } else {
        scriptLoadHandler();
      }
    });

    checkStyleSheets();
    const styleCheckInterval = setInterval(checkStyleSheets, 100);

    return () => {
      images.forEach(img => img.removeEventListener('load', imageLoadHandler));
      scripts.forEach(script => script.removeEventListener('load', scriptLoadHandler));
      clearInterval(styleCheckInterval);
    };
  }, [onLoadingComplete]);

  return {
    progress,
    isComplete,
    fadeOut,
    resources,
    currentLoadingItem
  };
};
