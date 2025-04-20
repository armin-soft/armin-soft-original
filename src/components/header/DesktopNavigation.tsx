
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationItem } from "./NavigationItem";
import { menuItems } from "@/hooks/use-navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

interface DesktopNavigationProps {
  currentPath: string;
}

export function DesktopNavigation({ currentPath }: DesktopNavigationProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <NavigationMenu className="hidden md:flex" dir="rtl">
      <NavigationMenuList className="space-x-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="relative group bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 transition-all duration-300 glow-effect"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-arminred-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{ 
                  scale: isHovered ? [0.95, 1.05, 1] : 0.95,
                  opacity: isHovered ? [0, 1] : 0 
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
              
              {/* Particle effects on hover */}
              <AnimatePresence>
                {isHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="particle"
                        initial={{ 
                          x: "50%", 
                          y: "50%", 
                          opacity: 0,
                          width: 2,
                          height: 2
                        }}
                        animate={{ 
                          x: `${50 + (Math.random() * 100 - 50)}%`,
                          y: `${50 + (Math.random() * 100 - 50)}%`,
                          opacity: [0, 0.8, 0],
                          width: [2, 6],
                          height: [2, 6]
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 1 + Math.random(),
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
              
              <Menu className="h-5 w-5 relative z-10 group-hover:text-white transition-colors" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl dropdown-animated" 
            align="end"
            sideOffset={8}
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-1 space-y-0.5"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <NavigationItem 
                    item={item}
                    currentPath={currentPath}
                  />
                </motion.div>
              ))}
            </motion.div>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
