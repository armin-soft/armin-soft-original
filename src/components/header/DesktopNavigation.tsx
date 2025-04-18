
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationItem } from "./NavigationItem";
import { menuItems } from "@/hooks/use-navigation";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface DesktopNavigationProps {
  currentPath: string;
}

export function DesktopNavigation({ currentPath }: DesktopNavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex" dir="rtl">
      <NavigationMenuList className="space-x-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-56 bg-black/90 backdrop-blur-xl border border-white/10" 
            align="end"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavigationItem 
                  item={item}
                  currentPath={currentPath}
                />
              </motion.div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
