
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuItem {
  name: string;
  path: string;
  submenu?: { name: string; path: string; }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  items: MenuItem[];
  currentPath: string;
  onItemClick: () => void;
}

export function MobileMenu({ isOpen, items, currentPath, onItemClick }: MobileMenuProps) {
  return (
    <div 
      className={cn(
        "md:hidden fixed inset-x-0 top-[60px] bg-background/95 backdrop-blur-xl shadow-lg pt-4 pb-6 border-b border-arminred-500/10 transition-all duration-300 transform",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
      )}
    >
      <nav className="container mx-auto px-4 flex flex-col space-y-1">
        {items.map((item) => (
          item.submenu ? (
            <DropdownMenu key={item.path}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-between w-full px-4 py-3.5 rounded-lg transition-colors font-medium text-right hover:bg-arminred-500/5">
                  <span>{item.name}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full mr-4 bg-background/95 backdrop-blur-xl border border-arminred-500/10" align="start">
                {item.submenu.map((subitem) => (
                  <DropdownMenuItem key={subitem.path} asChild className="focus:bg-arminred-500/10 focus:text-arminred-600">
                    <Link 
                      to={subitem.path}
                      className="cursor-pointer py-2.5 px-2"
                      onClick={onItemClick}
                    >
                      {subitem.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-3.5 rounded-lg transition-colors font-medium flex items-center justify-between",
                currentPath === item.path
                  ? "bg-arminred-500/10 text-arminred-600 font-semibold"
                  : "text-foreground/80 hover:bg-arminred-500/5 hover:text-arminred-600"
              )}
              onClick={onItemClick}
            >
              <span>{item.name}</span>
              {currentPath === item.path && <div className="h-2 w-2 rounded-full bg-arminred-500"></div>}
            </Link>
          )
        ))}
      </nav>
    </div>
  );
}
