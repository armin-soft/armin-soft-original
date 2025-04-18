
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Logo } from "./header/Logo";
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
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <DesktopNavigation currentPath={currentPath} />
            
            <div className="flex items-center gap-2 border-r border-gray-200 dark:border-gray-700 pr-4">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen}
        items={menuItems}
        currentPath={currentPath}
        onItemClick={toggleMenu}
      />
    </header>
  );
}
