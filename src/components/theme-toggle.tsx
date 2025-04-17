
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full relative"
      aria-label={`تغییر به حالت ${theme === "dark" ? "روشن" : "تاریک"}`}
    >
      <div className="relative size-6 flex items-center justify-center">
        <span
          className={`absolute inset-0 transition-opacity ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        >
          <Moon className="h-5 w-5 text-slate-700" />
        </span>
        <span
          className={`absolute inset-0 transition-opacity ${
            theme === "light" ? "opacity-0" : "opacity-100"
          }`}
        >
          <Sun className="h-5 w-5 text-yellow-400" />
        </span>
      </div>
    </Button>
  );
}
