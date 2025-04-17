
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
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
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300 farsi-numbers",
        scrolled
          ? "py-2 bg-background/95 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 space-x-reverse font-bold text-2xl"
              onClick={closeMenu}
            >
              <span className="bg-arminred-600 text-white px-2 py-1 rounded">آرمین</span>
              <span className="text-foreground">سافت</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenu className="hidden md:flex" dir="rtl">
              <NavigationMenuList className="space-x-reverse">
                {menuItems.map((item) => (
                  item.submenu ? (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuTrigger className="px-3 py-2 font-medium">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subitem.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subitem.name}</div>
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
                          "px-3 py-2 rounded-md transition-colors text-base font-medium hover:text-arminred-600 inline-block",
                          location.pathname === item.path
                            ? "text-arminred-600 font-semibold"
                            : "text-foreground/90"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="جستجو"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full mr-2"
              aria-label="جستجو"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 rounded-full"
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
        <div className="md:hidden absolute top-full right-0 left-0 bg-background/95 backdrop-blur-md shadow-lg pt-2 pb-4 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-1">
            {menuItems.map((item) => (
              item.submenu ? (
                <DropdownMenu key={item.path}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-between w-full px-4 py-3 rounded-md transition-colors font-medium text-right">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mr-4" align="start">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.path} asChild>
                        <Link 
                          to={subitem.path}
                          className="cursor-pointer"
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
                    "px-4 py-3 rounded-md transition-colors font-medium",
                    location.pathname === item.path
                      ? "bg-arminred-600/10 text-arminred-600 font-semibold"
                      : "text-foreground/80 hover:bg-accent"
                  )}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}

      {/* Global Search */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="جستجو در سایت..." dir="rtl" />
        <CommandList dir="rtl">
          <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
          <CommandGroup heading="صفحات">
            {menuItems.map((item) => (
              <CommandItem
                key={item.path}
                onSelect={() => {
                  window.location.href = item.path;
                  setSearchOpen(false);
                }}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="خدمات">
            <CommandItem
              onSelect={() => {
                window.location.href = "/service#software";
                setSearchOpen(false);
              }}
            >
              توسعه نرم‌افزار
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.location.href = "/service#security";
                setSearchOpen(false);
              }}
            >
              امنیت و هک اخلاقی
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.location.href = "/service#ai";
                setSearchOpen(false);
              }}
            >
              هوش مصنوعی و ربات‌ها
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
