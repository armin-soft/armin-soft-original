
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Logo } from "./header/Logo";
import { motion } from "framer-motion";
import "./header/header.css";
import { MobileMenu } from "./header/MobileMenu";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MenuToggle } from "./header/MenuToggle";
import { useNavigation, menuItems } from "@/hooks/use-navigation";

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
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <Logo />
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <DesktopNavigation currentPath={currentPath} />
            </motion.div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 border-r border-gray-200 dark:border-gray-700 pr-4"
            >
              <div className="glass-effect p-1 rounded-lg">
                <ThemeToggle />
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center md:hidden gap-2"
          >
            <div className="glass-effect p-1 rounded-lg">
              <ThemeToggle />
            </div>
            <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
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
