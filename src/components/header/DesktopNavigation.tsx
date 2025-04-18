
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationItem } from "./NavigationItem";
import { menuItems } from "@/hooks/use-navigation";

interface DesktopNavigationProps {
  currentPath: string;
}

export function DesktopNavigation({ currentPath }: DesktopNavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex" dir="rtl">
      <NavigationMenuList className="space-x-reverse">
        {menuItems.map((item) => (
          <NavigationItem 
            key={item.path}
            item={item}
            currentPath={currentPath}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
