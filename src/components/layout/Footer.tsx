import telegramLogo from "../../assets/logos/telegram.png";
import telegramLightLogo from "../../assets/logos/telegram-light.png";
import gitHubLogo from "../../assets/logos/github.png";
import gitHubLightLogo from "../../assets/logos/github-light.svg";
import { useTheme } from "../../hooks/useTheme";

export function Footer() {
    const { theme } = useTheme();

    return (
        <footer className="flex flex-row justify-around bg-white dark:bg-slate-800 border-t border-dashed border-neutral-800 dark:border-slate-100 py-6 transition-color duration-500">
            <div className="container mx-auto px-6 2xl:px-90 flex justify-between items-center">
                <div className="dark:text-slate-100 text-neutral-700">
                    &copy; {new Date().getFullYear()} Oleksandr Kharchenko. All
                    rights reserved.
                </div>
                <div className="flex items-center h-auto">
                    <a
                        href="https://t.me/Gilkanon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="dark:text-slate-100 text-neutral-700 hover:text-white transition-colors duration-500"
                    >
                        <img
                            src={
                                theme === "dark"
                                    ? telegramLogo
                                    : telegramLightLogo
                            }
                            alt="Telegram"
                            className="size-12"
                        />
                    </a>
                </div>
                <div className="flex items-center">
                    <a
                        href="https://github.com/Gilkanon/Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="dark:text-slate-100 text-neutral-700 hover:text-white transition-colors duration-500"
                    >
                        <img
                            src={
                                theme === "dark" ? gitHubLogo : gitHubLightLogo
                            }
                            alt="GitHub"
                            className="size-12"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
