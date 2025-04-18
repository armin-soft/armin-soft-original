
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
    <DropdownMenuItem asChild className="relative overflow-hidden focus:bg-white/5">
      <Link
        to={item.path}
        className={cn(
          "w-full px-3 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium relative group hover:text-arminred-500",
          isActive
            ? "text-arminred-500 font-semibold bg-arminred-500/10"
            : "text-foreground/80"
        )}
      >
        {isActive && (
          <motion.div
            layoutId="activeDropdownItem"
            className="absolute inset-0 bg-gradient-to-r from-arminred-500/20 to-arminred-500/5 rounded-lg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 flex items-center">
          {item.name}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-arminred-500 to-arminred-400 group-hover:w-full transition-all duration-300"
            initial={false}
            animate={isActive ? { width: "100%" } : { width: "0%" }}
          />
        </span>
      </Link>
    </DropdownMenuItem>
  );
}
