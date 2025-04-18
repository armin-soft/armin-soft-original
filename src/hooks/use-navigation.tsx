
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MenuItem {
  name: string;
  path: string;
}

export const menuItems = [
  { name: "صفحه اصلی", path: "/" },
  { name: "رزومه", path: "/resume" },
  { name: "خدمات", path: "/service" },
  { name: "نمونه کار", path: "/work-sample" },
  { name: "تماس", path: "/contact" },
  { name: "درباره", path: "/about" }
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
