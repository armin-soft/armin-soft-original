
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

      if (loadedCount === newResources.length) {
        setIsComplete(true);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onLoadingComplete, 500);
        }, 800);
      }

      return newResources;
    });
  };

  useEffect(() => {
    let scriptsLoaded = false;
    let fontsLoaded = false;
    let imagesLoaded = false;
    let stylesLoaded = false;

    const checkAllResourcesLoaded = () => {
      if (fontsLoaded && imagesLoaded && stylesLoaded && scriptsLoaded) {
        setIsComplete(true);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onLoadingComplete, 500);
        }, 800);
      }
    };

    document.fonts.ready.then(() => {
      fontsLoaded = true;
      updateResourceStatus("فونت‌ها");
      checkAllResourcesLoaded();
    });

    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;
    
    const imageLoadHandler = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        imagesLoaded = true;
        updateResourceStatus("تصاویر");
        checkAllResourcesLoaded();
      }
    };

    if (totalImages === 0) {
      imagesLoaded = true;
      updateResourceStatus("تصاویر");
      checkAllResourcesLoaded();
    } else {
      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
          if (loadedImages === totalImages) {
            imagesLoaded = true;
            updateResourceStatus("تصاویر");
            checkAllResourcesLoaded();
          }
        } else {
          img.addEventListener('load', imageLoadHandler);
        }
      });
    }

    const styleSheets = document.styleSheets;
    let loadedStyleSheets = 0;
    const totalStyleSheets = styleSheets.length;

    const checkStyleSheets = () => {
      loadedStyleSheets = Array.from(styleSheets).filter(sheet => {
        try {
          return sheet.cssRules.length > 0;
        } catch (e) {
          return false;
        }
      }).length;

      if (loadedStyleSheets === totalStyleSheets) {
        stylesLoaded = true;
        updateResourceStatus("استایل‌ها");
        checkAllResourcesLoaded();
      }
    };

    const scripts = document.querySelectorAll('script');
    let loadedScripts = 0;
    const totalScripts = scripts.length;

    const scriptLoadHandler = () => {
      loadedScripts++;
      if (loadedScripts === totalScripts) {
        scriptsLoaded = true;
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
