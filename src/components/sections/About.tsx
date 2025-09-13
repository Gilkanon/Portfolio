import nodeLogo from "../../assets/logos/nodejs-original.svg";
import nestJsLogo from "../../assets/logos/NestJS.svg";
import expressLogo from "../../assets/logos/Expressjs.svg";
import dockerLogo from "../../assets/logos/docker-plain.svg";
import prismaLogo from "../../assets/logos/prisma.png";
import mongoLogo from "../../assets/logos/mongodb-icon.svg";
import mysqlLogo from "../../assets/logos/mysql-original.svg";
import postgresqlLogo from "../../assets/logos/postgresql-plain.svg";
import redisLogo from "../../assets/logos/redis-original.svg";
import reactLogo from "../../assets/react.svg";

const technologies = [
    { id: 1, name: "NodeJS", logo: nodeLogo, url: "https://nodejs.org" },
    { id: 2, name: "NestJS", logo: nestJsLogo, url: "https://nestjs.com/" },
    {
        id: 3,
        name: "ExpressJS",
        logo: expressLogo,
        url: "https://expressjs.com/",
    },
    { id: 4, name: "Docker", logo: dockerLogo, url: "https://www.docker.com/" },
    {
        id: 5,
        name: "Prisma ORM",
        logo: prismaLogo,
        url: "https://www.prisma.io/",
    },
    { id: 6, name: "MySQL", logo: mysqlLogo, url: "https://www.mysql.com/" },
    {
        id: 7,
        name: "PostgreSQL",
        logo: postgresqlLogo,
        url: "https://www.postgresql.org/",
    },
    {
        id: 8,
        name: "MongoDB",
        logo: mongoLogo,
        url: "https://www.mongodb.com/",
    },
    { id: 9, name: "Redis", logo: redisLogo, url: "https://redis.io/" },
];

export function About() {
    return (
        <section id="about">
            <div className="min-h-screen container m-auto p-5 place-content-center ">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 flex-col">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-slate-100 text-stone-800">
                            Hi, I`m Oleksandr Kharchenko, a
                            JavaScript/TypeScript Developer.
                        </h2>
                        <p className="text-xl lg:text-2xl dark:text-slate-400 text-stone-600 leading-relaxed mb-4 text-justify">
                            As a passionate and self-taught Backend Developer, I
                            specialize in building the robust and scalable
                            server-side logic that powers modern web
                            applications. My journey into tech is driven by a
                            genuine curiosity and a love for solving complex
                            problems. My core expertise lies in crafting
                            efficient RESTful APIs, working seamlessly with both
                            relational (SQL) and non-relational (NoSQL)
                            databases, and implementing secure, role-based
                            authentication and authorization systems. I also
                            have hands-on experience with microservices
                            architecture, which allows me to build resilient and
                            maintainable applications. While my focus is on the
                            backend, I am also proficient in frontend
                            development with React, giving me a well-rounded
                            perspective on the entire application lifecycle. I'm
                            a firm believer in using the right tool for the job
                            and am always excited to learn new technologies and
                            adapt to different stacks. I am currently open to
                            new opportunities and collaborations. If you have an
                            interesting project or think we could create
                            something great together, I'd love to connect.
                            Please feel free to send me a message through the{" "}
                            <a
                                href="#contacts"
                                className="font-semibold dark:text-slate-100 text-stone-800"
                            >
                                Contacts
                            </a>{" "}
                            form or reach out directly on Telegram using the
                            icon in the footer.
                        </p>
                        <h3 className="text-xl lg:text-2xl font-bold mb-4 dark:text-slate-100 text-stone-800">
                            Tech stack:
                        </h3>
                        <ul className="flex flex-row flex-wrap gap-4 p-4 rounded-lg">
                            {technologies.map((tech) => (
                                <li key={tech.id}>
                                    <a
                                        href={tech.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            className="size-15 md:size-22 object-contain  rounded-md hover:animate-wiggle transition-transform duration-500 ease-in-out"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4 flex justify-center lg:justify-end">
                        <div className="size-80 rounded-full flex items-center justify-center animate-slow-spin">
                            <a
                                href="https://react.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={reactLogo}
                                    className="rounded-full size-80"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
