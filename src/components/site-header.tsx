
import { cn } from "@/lib/utils";
import { Logo } from "./header/Logo";
import { motion } from "framer-motion";
import "./header/header.css";
import { MobileMenu } from "./header/MobileMenu";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MenuToggle } from "./header/MenuToggle";
import { useNavigation } from "@/hooks/use-navigation";
import { menuItems } from "@/hooks/use-navigation";

export function SiteHeader() {
  const { isMenuOpen, scrolled, toggleMenu, currentPath } = useNavigation();

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500 farsi-numbers",
        scrolled
          ? "py-2 bg-background/80 backdrop-blur-xl border-b border-arminred-500/10 shadow-lg"
          : "py-4 bg-transparent"
      )}
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6"
      >
        <nav className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>

          {/* Logo - Right side on desktop */}
          <div className="md:order-last">
            <Logo />
          </div>

          {/* Navigation Menu - Center */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="hidden md:flex flex-1 justify-center items-center mx-8"
          >
            <DesktopNavigation currentPath={currentPath} />
          </motion.div>

          {/* Empty div for layout balance on mobile */}
          <div className="md:hidden w-10"></div>
        </nav>
      </motion.div>

      {/* Mobile Menu with Animation */}
      <MobileMenu 
        isOpen={isMenuOpen}
        items={menuItems}
        currentPath={currentPath}
        onItemClick={toggleMenu}
      />
    </header>
  );
}
