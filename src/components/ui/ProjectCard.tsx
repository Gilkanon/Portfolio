import { Button } from "./Button";

type ProjectCardProps = {
    name: string;
    url: string;
    preview?: string;
    description: string;
    technologies: string[];
};

export function ProjectCard({
    name,
    url,
    preview,
    description,
    technologies,
}: ProjectCardProps) {
    return (
        <div className="grid grid-cols-2 grid-rows-4 items-center justify-between place h-180 w-140 dark:bg-slate-800 bg-white m-5 p-5 rounded-3xl hover:shadow-2xl hover:shadow-amber-500/50 hover:bg-stone-100 dark:hover:shadow-sky-500 dark:hover:bg-slate-700 transition-all duration-500">
            <h3 className="col-span-2 row-span-1 font-semibold text-xl lg:text-3xl dark:text-slate-100 text-stone-800">
                {name}
            </h3>
            <p className="col-span-2 row-span-1 text-lg lg:text-2xl dark:text-slate-400 text-stone-600 mb-4">
                {description}
            </p>
            <div className="col-span-2 flex flex-row flex-wrap gap-2 mt-15">
                {technologies.map((tech) => (
                    <img src={tech} className="size-8 md:size-12 " />
                ))}
            </div>
            <div className="col-span-2 grid grid-cols-2 grid-rows-1">
                <div className="col-start-1 col-span-1">
                    {preview ? <Button href={preview} name="Preview" /> : null}
                </div>
                <div className="col-start-2 col-span-1 ml-auto">
                    {" "}
                    <Button href={url} name="GitHub" />
                </div>
            </div>
        </div>
    );
}
