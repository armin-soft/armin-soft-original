
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
    <DropdownMenuItem asChild className="relative overflow-hidden focus:bg-white/5 p-0">
      <Link
        to={item.path}
        className={cn(
          "w-full px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium relative group hover:text-arminred-500 flex items-center",
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
        
        {/* Left side dot indicator for active item */}
        <motion.div
          className={cn(
            "w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0",
            isActive ? "bg-arminred-500" : "bg-gray-600"
          )}
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse"
          }}
        />
        
        <span className="relative z-10 flex-grow">
          {item.name}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-arminred-500 to-arminred-400 group-hover:w-full transition-all duration-300"
            initial={false}
            animate={isActive ? { width: "100%" } : { width: "0%" }}
          />
        </span>
        
        {/* Right side indicator for active state */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-1 h-8 bg-arminred-500 rounded-full ml-2"
          />
        )}
        
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
          }}
        />
      </Link>
    </DropdownMenuItem>
  );
}
