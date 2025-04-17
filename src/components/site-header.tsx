
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

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

  const menuItems = [
    { name: "صفحه اصلی", path: "/" },
    { name: "رزومه", path: "/resume" },
    { name: "خدمات", path: "/service" },
    { name: "نمونه کار", path: "/work-sample" },
    { name: "تماس", path: "/contact" },
    { name: "درباره", path: "/about" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300 farsi-numbers",
        scrolled
          ? "py-2 bg-background/80 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 space-x-reverse font-bold text-2xl text-foreground"
              onClick={closeMenu}
            >
              <span className="bg-arminred-600 text-white px-2 py-1 rounded">آرمین</span>
              <span>سافت</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors text-base font-medium hover:text-arminred-600",
                  location.pathname === item.path
                    ? "text-arminred-600 font-semibold"
                    : "text-foreground/90"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mr-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 rounded-full"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 left-0 bg-background shadow-lg pt-2 pb-4 animate-fadeIn">
          <nav className="container mx-auto px-4 flex flex-col space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-3 rounded-md transition-colors font-medium",
                  location.pathname === item.path
                    ? "bg-arminred-600/10 text-arminred-600 font-semibold"
                    : "text-foreground/80 hover:bg-accent"
                )}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
