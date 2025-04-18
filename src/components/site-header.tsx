
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Logo } from "./header/Logo";
import { NavigationItem } from "./header/NavigationItem";
import { MobileMenu } from "./header/MobileMenu";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const menuItems = [
    { name: "صفحه اصلی", path: "/" },
    { name: "رزومه", path: "/resume" },
    { name: "خدمات", path: "/service", 
      submenu: [
        { name: "توسعه نرم‌افزار", path: "/service#software" },
        { name: "امنیت و هک اخلاقی", path: "/service#security" },
        { name: "هوش مصنوعی", path: "/service#ai" },
        { name: "وب سرویس", path: "/service#web" },
      ] 
    },
    { name: "نمونه کار", path: "/work-sample" },
    { name: "تماس", path: "/contact" },
    { name: "درباره", path: "/about" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500 farsi-numbers w-full",
        scrolled
          ? "py-2 bg-background/95 backdrop-blur-md shadow-lg border-b border-arminred-500/10"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu className="hidden md:flex" dir="rtl">
              <NavigationMenuList className="space-x-reverse">
                {menuItems.map((item) => (
                  <NavigationItem 
                    key={item.path}
                    item={item}
                    currentPath={location.pathname}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-2 border-r border-gray-200 dark:border-gray-700 pr-4">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 rounded-full relative"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            >
              <div className="size-6 flex items-center justify-center">
                <span
                  className={`absolute inset-0 transition-opacity ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </span>
                <span
                  className={`absolute inset-0 transition-opacity ${
                    !isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <X className="h-6 w-6 text-arminred-500" />
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen}
        items={menuItems}
        currentPath={location.pathname}
        onItemClick={closeMenu}
      />
    </header>
  );
}
