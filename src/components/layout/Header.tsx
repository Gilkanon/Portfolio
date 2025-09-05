export function Header() {
    return (
        <header className="sticky top-0 flex flex-row w-full h-22 m-auto bg-neutral-950 items-center p-4 2xl:px-80 border-b border-dashed border-neutral-800">
            <nav className="flex flex-row w-full items-center justify-between">
                <div className="text-2xl font-bold text-gray-300">
                    Oleksandr Kharchenko
                </div>

                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="#about"
                            className="text-xl text-gray-400 hover:text-white"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-xl text-gray-400 hover:text-white"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contacts"
                            className="text-xl text-gray-400 hover:text-white"
                        >
                            Contacts
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
