export function Header() {
    return (
        <header className="sticky top-0 flex flex-row w-full h-22 m-auto bg-white dark:bg-slate-800 items-center p-4 2xl:px-80 border-b border-dashed border-neutral-800 dark:border-slate-100 transition-color duration-500 z-50">
            <nav className="flex flex-row w-full items-center justify-between">
                <div className="text-xl md:text-2xl font-bold dark:text-slate-100 text-stone-800">
                    Oleksandr Kharchenko
                </div>

                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="#about"
                            className="text-lg md:text-xl dark:text-slate-400 text-stone-600 dark:hover:text-white hover:text-black"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-lg md:text-xl dark:text-slate-400 text-stone-600 dark:hover:text-white hover:text-black"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contacts"
                            className="text-lg md:text-xl dark:text-slate-400 text-stone-600 dark:hover:text-white hover:text-black"
                        >
                            Contacts
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
