
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MenuItem {
  name: string;
  path: string;
}

export const menuItems = [
  { name: "صفحه اصلی", path: "/" },
  { name: "رزومه", path: "/Resume" },
  { name: "خدمات", path: "/Service" },
  { name: "نمونه کار", path: "/Work-Sample" },
  { name: "تماس", path: "/Contact" },
  { name: "درباره", path: "/About" }
];

export function useNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return {
    isMenuOpen,
    scrolled,
    toggleMenu,
    closeMenu,
    currentPath: location.pathname
  };
}
