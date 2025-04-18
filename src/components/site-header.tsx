
import { cn } from "@/lib/utils";
import { Logo } from "./header/Logo";
import { motion } from "framer-motion";
import "./header/header.css";
import { MobileMenu } from "./header/MobileMenu";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MenuToggle } from "./header/MenuToggle";
import { useNavigation } from "@/hooks/use-navigation";
import { LiveDateTime } from "./header/LiveDateTime";
import { menuItems } from "@/hooks/use-navigation";

export function SiteHeader() {
  const { isMenuOpen, scrolled, toggleMenu, currentPath } = useNavigation();
  
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

          {/* Navigation Menu - Left side */}
          <div className="flex items-center gap-4">
            <DesktopNavigation currentPath={currentPath} />
            <Logo />
            <LiveDateTime />
          </div>
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
