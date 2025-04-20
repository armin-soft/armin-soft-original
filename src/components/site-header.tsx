
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
import { useEffect, useState } from "react";

export function SiteHeader() {
  const { isMenuOpen, scrolled, toggleMenu, currentPath } = useNavigation();
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Set animation complete after a short delay to trigger sequential animations
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Header variants for animation
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        mass: 1
      }
    }
  };
  
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500 farsi-numbers w-full header-border-gradient",
        scrolled
          ? "py-2 bg-background/80 backdrop-blur-xl shadow-lg"
          : "py-4 bg-background/30 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Mobile Menu Toggle - Only visible on mobile */}
          <div className="md:hidden">
            <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>

          {/* Logo - Left side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1
            }}
          >
            <Logo />
          </motion.div>

          {/* DateTime - Center with conditional rendering */}
          <AnimatePresence mode="wait">
            {animationComplete && (
              <motion.div 
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3
                }}
              >
                <LiveDateTime />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation Menu - Right side with sequential animation */}
          <AnimatePresence mode="wait">
            {animationComplete && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4
                }}
              >
                <DesktopNavigation currentPath={currentPath} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen}
        items={menuItems}
        currentPath={currentPath}
        onItemClick={toggleMenu}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-arminred-500/0 via-arminred-500/40 to-arminred-500/0"></div>
      <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-arminred-500/0 via-arminred-500/40 to-arminred-500/0"></div>
    </motion.header>
  );
}
