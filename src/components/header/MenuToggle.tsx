
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="mr-2 rounded-full relative"
      onClick={onClick}
      aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
    >
      <div className="size-6 flex items-center justify-center">
        <span
          className={`absolute inset-0 transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <Menu className="h-6 w-6" />
        </span>
        <span
          className={`absolute inset-0 transition-opacity ${
            !isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <X className="h-6 w-6 text-arminred-500" />
        </span>
      </div>
    </Button>
  );
}
