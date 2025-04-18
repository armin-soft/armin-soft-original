
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

interface NavigationItemProps {
  item: {
    name: string;
    path: string;
  };
  currentPath: string;
}

export function NavigationItem({ item, currentPath }: NavigationItemProps) {
  const isActive = currentPath === item.path;
  
  return (
    <NavigationMenuItem>
      <Link
        to={item.path}
        className={cn(
          "px-2 md:px-4 py-2 rounded-lg transition-all duration-300 text-sm md:text-base font-medium relative hover:text-arminred-500 inline-flex items-center justify-center nav-item-highlight",
          isActive
            ? "text-arminred-500 font-semibold"
            : "text-foreground/80"
        )}
      >
        {isActive && (
          <motion.span
            layoutId="activeTab"
            className="absolute inset-0 bg-arminred-500/10 rounded-lg"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">{item.name}</span>
      </Link>
    </NavigationMenuItem>
  );
}
