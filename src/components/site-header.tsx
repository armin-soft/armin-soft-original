
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500 farsi-numbers",
        scrolled
          ? "py-2 bg-background/95 backdrop-blur-md shadow-lg border-b border-arminred-500/10"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="group flex items-center space-x-2 space-x-reverse font-bold text-2xl"
              onClick={closeMenu}
            >
              <div className="bg-gradient-to-r from-arminred-700 to-arminred-500 text-white px-3 py-1.5 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-arminred-500/30">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">آرمین</span>
              </div>
              <span className="text-foreground transition-colors duration-300 group-hover:text-arminred-600">سافت</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu className="hidden md:flex" dir="rtl">
              <NavigationMenuList className="space-x-reverse">
                {menuItems.map((item) => (
                  item.submenu ? (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuTrigger className="px-3 py-2 font-medium transition-colors relative hover:text-arminred-600 data-[state=open]:text-arminred-600 before:absolute before:bottom-0 before:right-0 before:w-0 before:h-0.5 before:bg-arminred-500 hover:before:w-full hover:before:transition-all hover:before:duration-300">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[220px] gap-1 p-3 bg-background/95 backdrop-blur-xl shadow-xl border border-arminred-500/10 rounded-xl">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subitem.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-arminred-500/10 hover:text-arminred-600 focus:bg-accent focus:text-accent-foreground"
                                >
                                  {subitem.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.path}>
                      <Link
                        to={item.path}
                        className={cn(
                          "px-3 py-2 rounded-md transition-colors text-base font-medium relative hover:text-arminred-600 inline-block",
                          location.pathname === item.path
                            ? "text-arminred-600 font-semibold after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-arminred-500"
                            : "text-foreground/90 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-arminred-500 hover:after:w-full hover:after:transition-all hover:after:duration-300"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-2 border-r border-gray-200 dark:border-gray-700 pr-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-[60px] bg-background/95 backdrop-blur-xl shadow-lg pt-4 pb-6 border-b border-arminred-500/10 transition-all duration-300 transform",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-1">
          {menuItems.map((item) => (
            item.submenu ? (
              <DropdownMenu key={item.path}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center justify-between w-full px-4 py-3.5 rounded-lg transition-colors font-medium text-right hover:bg-arminred-500/5">
                    <span>{item.name}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full mr-4 bg-background/95 backdrop-blur-xl border border-arminred-500/10" align="start">
                  {item.submenu.map((subitem) => (
                    <DropdownMenuItem key={subitem.path} asChild className="focus:bg-arminred-500/10 focus:text-arminred-600">
                      <Link 
                        to={subitem.path}
                        className="cursor-pointer py-2.5 px-2"
                        onClick={closeMenu}
                      >
                        {subitem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-3.5 rounded-lg transition-colors font-medium flex items-center justify-between",
                  location.pathname === item.path
                    ? "bg-arminred-500/10 text-arminred-600 font-semibold"
                    : "text-foreground/80 hover:bg-arminred-500/5 hover:text-arminred-600"
                )}
                onClick={closeMenu}
              >
                <span>{item.name}</span>
                {location.pathname === item.path && <div className="h-2 w-2 rounded-full bg-arminred-500"></div>}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
