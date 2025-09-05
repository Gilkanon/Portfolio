import nodeLogo from "../../assets/logos/nodejs-original.svg";
import nestJsLogo from "../../assets/logos/NestJS.svg";
import dockerLogo from "../../assets/logos/docker-plain.svg";
import prismaLogo from "../../assets/logos/Prisma.svg";
import mysqlLogo from "../../assets/logos/mysql-original.svg";
import javaScriptLogo from "../../assets/logos/javascript-plain.svg";
import typeScriptLogo from "../../assets/logos/typescript-plain.svg";
import reactLogo from "../../assets/react.svg";
import awsLogo from "../../assets/logos/amazonwebservices-original-wordmark.svg";
import rabbitMQLogo from "../../assets/logos/rabbitmq-original.svg";
import jestLogo from "../../assets/logos/jest-plain.svg";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
    {
        id: 1,
        name: "Memory card game",
        url: "https://github.com/Gilkanon/Memory-card-game",
        preview: "https://gilkanon.github.io/Memory-card-game/",
        description:
            "My first React app, written during the course at The Odin Project",
        technologies: [javaScriptLogo, reactLogo],
    },
    {
        id: 2,
        name: "Order management system",
        url: "https://github.com/Gilkanon/order-management-system",
        description:
            "Backend service for managing orders, clients, and users, you can find out more in the repository",
        technologies: [
            typeScriptLogo,
            nodeLogo,
            nestJsLogo,
            dockerLogo,
            mysqlLogo,
            prismaLogo,
        ],
    },
    {
        id: 3,
        name: "Eventify",
        url: "https://github.com/Gilkanon/event",
        description:
            "A microservice architecture based system for an event platform, with the ability to upload media files via s3, the ability to create your own event pages or subscribe to others, you can find out more in the repository",
        technologies: [
            typeScriptLogo,
            nodeLogo,
            nestJsLogo,
            dockerLogo,
            mysqlLogo,
            prismaLogo,
            rabbitMQLogo,
            awsLogo,
        ],
    },
    {
        id: 4,
        name: "Blogging platform",
        url: "https://github.com/Gilkanon/blog_platform",
        description:
            "A modern backend API built with NestJS, Prisma, and MySQL to support user authentication, role-based access, subscriptions, you can find out more in the repository",
        technologies: [
            typeScriptLogo,
            nodeLogo,
            nestJsLogo,
            dockerLogo,
            mysqlLogo,
            prismaLogo,
            jestLogo,
        ],
    },
];

export function Projects() {
    return (
        <section id="projects">
            <div className="min-h-screen container m-auto p-5 justify-around items-center">
                <div className="grid grid-cols-1 items-center ">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Projects
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed mb-4 ">
                        In this section, you'll find projects that showcase my
                        backend expertise and my journey into frontend
                        development.
                    </p>
                    <div className="flex flex-row flex-wrap place-content-center">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                url={project.url}
                                preview={project.preview}
                                technologies={project.technologies}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
