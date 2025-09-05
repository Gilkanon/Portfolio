import telegramLogo from "../../assets/logos/telegram.png";

export function Footer() {
    return (
        <footer className="flex flex-row justify-around bg-neutral-950 border-t border-dashed border-neutral-800 py-6">
            <div className="container mx-auto px-6 2xl:px-90 flex justify-between items-center">
                <div className="text=gray-500">
                    &copy; {new Date().getFullYear()} Oleksandr Kharchenko. All
                    rights reserved.
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://t.me/Gilkanon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="text-gray-500 hover:text-white transition-colors duration-500"
                    >
                        <img
                            src={telegramLogo}
                            alt="Telegram"
                            className="size-12"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
