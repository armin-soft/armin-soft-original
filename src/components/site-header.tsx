
import { cn } from "@/lib/utils";
import { Logo } from "./header/Logo";
import { motion } from "framer-motion";
import "./header/header.css";
import { MobileMenu } from "./header/MobileMenu";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MenuToggle } from "./header/MenuToggle";
import { useNavigation, menuItems } from "@/hooks/use-navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

export function SiteHeader() {
  const { isMenuOpen, scrolled, toggleMenu, currentPath } = useNavigation();

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500 farsi-numbers w-full",
        scrolled
          ? "py-2 bg-background/95 backdrop-blur-md shadow-lg border-b border-arminred-500/10"
          : "py-4 bg-transparent"
      )}
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 md:px-6 w-full"
      >
        <div className="flex items-center justify-between w-full">
          {/* Right Section */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
            <ChevronRight className="hidden md:block h-5 w-5 text-arminred-500" />
          </motion.div>

          {/* Center Section */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="hidden md:flex items-center gap-8">
              <Logo />
              <DesktopNavigation currentPath={currentPath} />
            </div>
            <div className="md:hidden">
              <Logo />
            </div>
          </motion.div>

          {/* Left Section */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <ChevronLeft className="hidden md:block h-5 w-5 text-arminred-500" />
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
