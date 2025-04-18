
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
          "px-4 py-2 rounded-full transition-all duration-300 text-sm relative group hover:text-arminred-600",
          isActive 
            ? "text-arminred-600 font-semibold" 
            : "text-foreground/80"
        )}
      >
        <span className="relative z-10">{item.name}</span>
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-arminred-100/50 dark:bg-arminred-950/50 rounded-full"
            transition={{ type: "spring", duration: 0.5 }}
          />
        )}
        <div className="absolute inset-0 rounded-full bg-arminred-100/0 dark:bg-arminred-950/0 transition-all duration-300 group-hover:bg-arminred-100/50 dark:group-hover:bg-arminred-950/50" />
      </Link>
    </NavigationMenuItem>
  );
}
