import nodeLogo from "../../assets/logos/nodejs-original.svg";
import nestJsLogo from "../../assets/logos/NestJS.svg";
import expressLogo from "../../assets/logos/Expressjs.svg";
import dockerLogo from "../../assets/logos/docker-plain.svg";
import prismaLogo from "../../assets/logos/Prisma.svg";
import mongoLogo from "../../assets/logos/mongodb-icon.svg";
import mysqlLogo from "../../assets/logos/mysql-original.svg";
import postgresqlLogo from "../../assets/logos/postgresql-plain.svg";
import redisLogo from "../../assets/logos/redis-original.svg";
import cat from "../../assets/cat.jpg";

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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-8 flex-col">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Hi, I`m Oleksandr Kharchenko, a developer from
                            Ukraine.
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed mb-4">
                            As a Backend Developer, I have been responsible for
                            designing and implementing scalable backend
                            solutions, focusing clean code principles, and
                            maintainability. My work includes building REST
                            APIs, implementing authentication and role-based
                            access control, and ensuring data integrity through
                            validation and testing. I have experience working
                            with relational and non-relational databases,
                            integrating caching and real-time communication.
                            Additionally, I worked on media storage solutions
                            and optimized application performance through
                            containerization and message-driven communication.
                        </p>
                        <h3 className="text-xl lg:text-2xl font-bold mb-4">
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
                                            className="size-22 object-contain  rounded-md hover:animate-wiggle transition-transform duration-500 ease-in-out"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4 flex justify-center md:justify-end">
                        <div className="size-80 bg-black rounded-full flex items-center justify-center">
                            <img src={cat} className="rounded-full size-80" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
