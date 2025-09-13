import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed flex  bottom-20 right-10 rounded-full size-12 md:bottom-20 md:right-20 md:size-22 bg-white dark:bg-slate-800 dark:shadow-sky-500 shadow-amber-500/50 justify-around items-center hover:cursor-pointer hover:shadow-xl duration-500"
        >
            {theme === "light" ? (
                <Moon size={50} color="#2e2e2e" />
            ) : (
                <SunMedium size={50} color="#fffafa" />
            )}
        </button>
    );
}
