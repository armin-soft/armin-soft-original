
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress and visibility
  const handleScroll = () => {
    const scrolled = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = windowHeight > 0 ? Math.min((scrolled / windowHeight) * 100, 100) : 0;
    
    setScrollProgress(progress);
    setIsVisible(scrolled > 300); // Show after scrolling 300px
  };

  // Set up scroll listener - ensure it runs on initial mount
  useEffect(() => {
    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-[9999]" // Increased z-index to ensure visibility
        >
          <div className="relative">
            {/* Progress Circle */}
            <svg
              className="w-14 h-14 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                className="text-gray-800/20"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
              <circle
                className="text-arminred-500"
                strokeWidth="8"
                strokeDasharray={264}
                strokeDashoffset={264 - (264 * scrollProgress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
            </svg>

            {/* Scroll Button */}
            <Button
              onClick={scrollToTop}
              variant="secondary"
              size="icon"
              className={cn(
                "absolute inset-0 m-auto rounded-full shadow-lg",
                "bg-gradient-to-r from-black/90 to-black text-white",
                "hover:from-arminred-600 hover:to-arminred-700",
                "border border-white/10 backdrop-blur-sm",
                "transition-all duration-300 ease-out transform hover:scale-105"
              )}
              aria-label="بازگشت به بالای صفحه"
            >
              <ChevronUp className="h-5 w-5" />
              <span className="sr-only">بازگشت به بالای صفحه</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
