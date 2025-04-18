
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationItem } from "./NavigationItem";
import { menuItems } from "@/hooks/use-navigation";
import { motion } from "framer-motion";

interface DesktopNavigationProps {
  currentPath: string;
}

export function DesktopNavigation({ currentPath }: DesktopNavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex" dir="rtl">
      <NavigationMenuList className="space-x-reverse space-x-1 bg-white/5 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <NavigationItem 
              item={item}
              currentPath={currentPath}
            />
          </motion.div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
