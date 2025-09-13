import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggleSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            onClick={toggleTheme}
            className="flex items-center w-12 h-6 rounded-2xl p-1 hover:cursor-pointer bg-stone-200 dark:bg-slate-900 hover:ring-1 hover:ring-amber-500/50 dark:hover:ring-sky-500  duration-500"
        >
            <div
                className={`flex justify-center items-center bg-white dark:bg-slate-800 rounded-full size-5 transition-transform ease-in-out duration-500 ${
                    theme === "dark" ? "translate-x-full" : "translate-x-0"
                }`}
            >
                {theme === "light" ? (
                    <SunMedium size={20} color="#2e2e2e" />
                ) : (
                    <Moon size={20} color="#fffafa" />
                )}
            </div>
        </div>
    );
}
