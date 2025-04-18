
import { cn } from "@/lib/utils";
import { Logo } from "./header/Logo";
import { motion, AnimatePresence } from "framer-motion";
import "./header/header.css";
import { MobileMenu } from "./header/MobileMenu";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MenuToggle } from "./header/MenuToggle";
import { useNavigation } from "@/hooks/use-navigation";
import { LiveDateTime } from "./header/LiveDateTime";
import { menuItems } from "@/hooks/use-navigation";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const { isMenuOpen, scrolled, toggleMenu, currentPath } = useNavigation();
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Close search box when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const searchContainer = document.getElementById('search-container');
      
      if (searchContainer && !searchContainer.contains(target)) {
        setShowSearchBox(false);
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500 farsi-numbers w-full header-border-gradient",
        scrolled
          ? "py-2 bg-background/95 backdrop-blur-md shadow-lg"
          : "py-4 bg-background/30 backdrop-blur-sm"
      )}
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 md:px-6 w-full"
      >
        <div className="flex items-center justify-between w-full">
          {/* Mobile Menu Toggle - Only visible on mobile */}
          <div className="md:hidden">
            <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>

          {/* Logo - Left side on desktop, center on mobile */}
          <div className="flex items-center gap-4">
            <Logo />
            <LiveDateTime />
          </div>

          {/* Navigation Menu - Center */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex flex-1 justify-center items-center"
          >
            <DesktopNavigation currentPath={currentPath} />
          </motion.div>

          {/* Search Button - Right side */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
            id="search-container"
          >
            <button 
              className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setShowSearchBox(!showSearchBox);
              }}
            >
              <Search className="h-4 w-4 text-gray-200" strokeWidth={2} />
            </button>
            
            <AnimatePresence>
              {showSearchBox && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 top-full mt-2 w-64 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-md px-3 py-2 border border-white/5">
                    <Search className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="جستجو..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-500 w-full focus:ring-0"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      <MobileMenu 
        isOpen={isMenuOpen}
        items={menuItems}
        currentPath={currentPath}
        onItemClick={toggleMenu}
      />
    </header>
  );
}
