
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface NavigationItemProps {
  item: {
    name: string;
    path: string;
    submenu?: { name: string; path: string; }[];
  };
  currentPath: string;
}

export function NavigationItem({ item, currentPath }: NavigationItemProps) {
  return (
    <NavigationMenuItem>
      <Link
        to={item.path}
        className={cn(
          "px-2 md:px-3 py-1.5 md:py-2 rounded-md transition-colors text-sm md:text-base font-medium relative hover:text-arminred-600 inline-block",
          currentPath === item.path
            ? "text-arminred-600 font-semibold after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-arminred-500"
            : "text-foreground/90 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-arminred-500 hover:after:w-full hover:after:transition-all hover:after:duration-300"
        )}
      >
        {item.name}
      </Link>
    </NavigationMenuItem>
  );
}
