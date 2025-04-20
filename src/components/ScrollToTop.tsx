
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll position on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-300 transform",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
    )}>
      <Button 
        onClick={scrollToTop}
        variant="secondary"
        size="icon"
        className="rounded-full w-12 h-12 shadow-lg bg-gradient-to-r from-arminred-500 to-arminred-600 text-white hover:from-arminred-600 hover:to-arminred-700 backdrop-blur-sm border border-white/10"
        aria-label="بازگشت به بالای صفحه"
      >
        <ChevronUp className="h-6 w-6" />
        <span className="sr-only">بازگشت به بالای صفحه</span>
      </Button>
    </div>
  );
}
