
import { useState, useEffect, useCallback } from "react";

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

  const updateResourceStatus = useCallback((resourceName: string) => {
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
  }, []);

  const checkAllResourcesLoaded = useCallback(() => {
    setResources(current => {
      const allLoaded = current.every(resource => resource.loaded);
      if (allLoaded) {
        setIsComplete(true);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onLoadingComplete, 500);
        }, 800);
      }
      return current;
    });
  }, [onLoadingComplete]);

  // Handle font loading
  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        updateResourceStatus("فونت‌ها");
        checkAllResourcesLoaded();
      });
    } else {
      // Fallback for browsers not supporting document.fonts
      updateResourceStatus("فونت‌ها");
      checkAllResourcesLoaded();
    }
  }, [updateResourceStatus, checkAllResourcesLoaded]);

  // Handle image loading
  useEffect(() => {
    let imageLoadHandlers: { img: HTMLImageElement, handler: () => void }[] = [];
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;
    
    if (totalImages === 0) {
      updateResourceStatus("تصاویر");
      checkAllResourcesLoaded();
    } else {
      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          const handler = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              updateResourceStatus("تصاویر");
              checkAllResourcesLoaded();
            }
          };
          
          img.addEventListener('load', handler);
          imageLoadHandlers.push({ img, handler });
        }
      });

      if (loadedImages === totalImages) {
        updateResourceStatus("تصاویر");
        checkAllResourcesLoaded();
      }
    }

    return () => {
      imageLoadHandlers.forEach(({ img, handler }) => {
        img.removeEventListener('load', handler);
      });
    };
  }, [updateResourceStatus, checkAllResourcesLoaded]);

  // Handle stylesheet loading
  useEffect(() => {
    const styleSheets = document.styleSheets;
    
    const checkStyleSheets = () => {
      try {
        const loadedStyleSheets = Array.from(styleSheets).filter(sheet => {
          try {
            return sheet.cssRules.length > 0;
          } catch (e) {
            return false;
          }
        }).length;

        if (loadedStyleSheets > 0) {
          updateResourceStatus("استایل‌ها");
          checkAllResourcesLoaded();
          return true;
        }
        return false;
      } catch (e) {
        console.error("Error checking stylesheets:", e);
        return false;
      }
    };

    if (checkStyleSheets()) return;
    
    const styleCheckInterval = setInterval(() => {
      if (checkStyleSheets()) {
        clearInterval(styleCheckInterval);
      }
    }, 100);

    return () => {
      clearInterval(styleCheckInterval);
    };
  }, [updateResourceStatus, checkAllResourcesLoaded]);

  // Handle script loading
  useEffect(() => {
    let scriptLoadHandlers: { script: HTMLScriptElement, handler: () => void }[] = [];
    const scripts = document.querySelectorAll('script');
    let loadedScripts = 0;
    const totalScripts = scripts.length;

    scripts.forEach(script => {
      if (script.hasAttribute('async') || script.hasAttribute('defer')) {
        const handler = () => {
          loadedScripts++;
          if (loadedScripts === totalScripts) {
            updateResourceStatus("اسکریپت‌ها");
            checkAllResourcesLoaded();
          }
        };
        
        script.addEventListener('load', handler);
        scriptLoadHandlers.push({ script, handler });
      } else {
        loadedScripts++;
      }
    });

    if (loadedScripts === totalScripts) {
      updateResourceStatus("اسکریپت‌ها");
      checkAllResourcesLoaded();
    }

    return () => {
      scriptLoadHandlers.forEach(({ script, handler }) => {
        script.removeEventListener('load', handler);
      });
    };
  }, [updateResourceStatus, checkAllResourcesLoaded]);

  return {
    progress,
    isComplete,
    fadeOut,
    resources,
    currentLoadingItem
  };
};
