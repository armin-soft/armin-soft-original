
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface SubMenuItem {
  name: string;
  path: string;
}

interface NavigationItemProps {
  item: {
    name: string;
    path: string;
    submenu?: SubMenuItem[];
  };
  currentPath: string;
}

export function NavigationItem({ item, currentPath }: NavigationItemProps) {
  if (item.submenu) {
    return (
      <NavigationMenuItem>
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
    );
  }

  return (
    <NavigationMenuItem>
      <Link
        to={item.path}
        className={cn(
          "px-3 py-2 rounded-md transition-colors text-base font-medium relative hover:text-arminred-600 inline-block",
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
