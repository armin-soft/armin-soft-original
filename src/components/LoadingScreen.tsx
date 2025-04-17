
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Loader, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Assets to preload
    const assets = [
      '/images/logo.svg', // Placeholder for your assets
      // Add more assets here as needed
    ];
    
    // Simulate loading and resource fetching
    const loadingInterval = setInterval(() => {
      setProgress((prevProgress) => {
        // For demo purposes, increment by a random amount between 1-4%
        const randomIncrement = Math.floor(Math.random() * 4) + 1;
        const newProgress = Math.min(prevProgress + randomIncrement, 90);
        
        return newProgress;
      });
    }, 200);

    // Simulate complete resource loading
    setTimeout(() => {
      clearInterval(loadingInterval);
      setProgress(100);
      setIsComplete(true);
      
      // Wait for a moment with 100% progress before fading out
      setTimeout(() => {
        setFadeOut(true);
        
        // After fade out, notify parent component
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }, 800);
    }, 3000); // Total loading time simulation: 3 seconds

    return () => {
      clearInterval(loadingInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out",
        fadeOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">آرمین سافت</h1>
          <p className="text-muted-foreground farsi-numbers">
            در حال بارگذاری محتوا... {progress}٪
          </p>
        </div>

        <div className="relative mb-8">
          <Progress value={progress} className="h-2 mb-2" />
          
          <div className="flex justify-between text-xs text-muted-foreground farsi-numbers">
            <span>۰٪</span>
            <span>۱۰۰٪</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          {isComplete ? (
            <CheckCircle className="h-8 w-8 text-primary animate-fade-in" />
          ) : (
            <Loader className="h-8 w-8 text-primary animate-spin" />
          )}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            طراحی و توسعه: آرمین سافت
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
