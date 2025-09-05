import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";

export function Main() {
    return (
        <div className="flex flex-col justify-around bg-neutral-950 py-10 gap-10">
            <About />
            <span className="border-b border-dashed border-neutral-800"></span>
            <Projects />
            <span className="border-b border-dashed border-neutral-800"></span>
            <Contact />
        </div>
    );
}
