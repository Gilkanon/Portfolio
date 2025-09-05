type ButtonProps = {
    href: string;
    name?: string;
};

export function Button({ href, name = "Open" }: ButtonProps) {
    return (
        <a
            className="w-35 h-15 rounded-xl font-semibold inline-flex items-center justify-center text-neutral-200 bg-blue-500 hover:ring-2 hover:ring-white transition-colors duration-500 ease-in-out text-md lg:text-xl"
            type="button"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {name}
        </a>
    );
}
