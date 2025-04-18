
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
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
    <DropdownMenuItem asChild>
      <Link
        to={item.path}
        className={cn(
          "w-full px-2 py-2 rounded-lg transition-all duration-300 text-sm font-medium relative hover:text-arminred-500",
          isActive
            ? "text-arminred-500 font-semibold bg-arminred-500/10"
            : "text-foreground/80"
        )}
      >
        {isActive && (
          <motion.span
            layoutId="activeDropdownItem"
            className="absolute left-0 top-0 h-full w-1 bg-arminred-500 rounded-r"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">{item.name}</span>
      </Link>
    </DropdownMenuItem>
  );
}
