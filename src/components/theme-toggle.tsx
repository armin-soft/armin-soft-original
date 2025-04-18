
// This component is no longer needed since we only use dark mode
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full relative bg-gray-800 hover:bg-gray-700"
      aria-label="حالت تاریک"
    >
      <div className="relative size-6 flex items-center justify-center">
        <Moon className="h-5 w-5 text-yellow-400" />
      </div>
    </Button>
  );
}
