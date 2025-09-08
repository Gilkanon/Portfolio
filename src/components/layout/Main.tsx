import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";

export function Main() {
    return (
        <div className="flex flex-col justify-around bg-stone-100 dark:bg-slate-900 py-10 gap-10 transition-color duration-500">
            <About />
            <span className="border-b border-dashed border-neutral-800 dark:border-slate-100"></span>
            <Projects />
            <span className="border-b border-dashed border-neutral-800 dark:border-slate-100"></span>
            <Contact />
        </div>
    );
}
