import LogoLoop from "@/components/logo-loop";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiSpringboot,
    SiJenkins, SiDocker, SiTerraform, SiDatadog, SiFirebase, SiLinux
} from 'react-icons/si';
import { FaJava, FaAws, FaDatabase } from 'react-icons/fa6';
import { GrOracle } from 'react-icons/gr';
import ShinyText from "@/components/shinney-text";
import SpotlightCard from "@/components/card";

const techLogos = [
    // Frontend
    { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiNextdotjs color="#FFFFFF" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },

    // Backend
    { node: <FaJava color="#007396" />, title: "Java", href: "https://www.java.com" },
    { node: <SiSpringboot color="#6DB33F" />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
    { node: <GrOracle color="#F80000" />, title: "Oracle", href: "https://www.oracle.com" },

    // Cloud & Infrastructure
    { node: <FaAws color="#FF9900" />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiFirebase color="#FFCA28" />, title: "Firebase", href: "https://firebase.google.com" },

    // DevOps & Tools
    { node: <SiDocker color="#2496ED" />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiTerraform color="#623CE4" />, title: "Terraform", href: "https://www.terraform.io" },
    { node: <SiDatadog color="#632CA6" />, title: "Datadog", href: "https://www.datadoghq.com" },
    { node: <SiLinux color="#FCC624" />, title: "Linux", href: "https://www.linux.org" },

    // CI/CD & Database
    { node: <SiJenkins color="#D24939" />, title: "Jenkins", href: "https://www.jenkins.io" },
    { node: <FaDatabase color="#336791" />, title: "SQL Database", href: "https://en.wikipedia.org/wiki/SQL" },
];

const techCategories = [
    {
        title: "Frontend",
        technologies: ["JavaScript", "TypeScript", "Next.js", "React"]
    },
    {
        title: "Backend",
        technologies: ["Java", "Spring Boot", "PL/SQL", "Kafka"]
    },
    {
        title: "Cloud & Infrastructure",
        technologies: ["AWS", "Firebase", "Linux"]
    },
    {
        title: "DevOps & Tools",
        technologies: ["Docker", "Terraform", "Datadog","Jenkins" ]
    },
    {
        title: "Database",
        technologies: [ "Oracel SQL", "MongoDB", "Firebase Firestore"]
    }
];

const About = () => {
    return (
        <section id="about" className="relative z-10 py-12 md:py-20 px-6 max-w-7xl mx-auto">
            {/* Description and Tech Stack Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-18 mb-16">
                {/* Left Side - Title and Description */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="inline-block px-4 py-2 text-[8px] md:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                            Who Am I
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                            <ShinyText
                                text="About Me"
                                speed={3}
                                delay={0}
                                color="#ffffff"
                                shineColor="#b5b5b5"
                                spread={120}
                                direction="left"
                                yoyo={false}
                                pauseOnHover={false}
                                disabled={false}
                            />
                        </h2>
                    </div>
                    <div className="max-w-4xl space-y-4">
                        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
                            Software Engineer with <span className="text-foreground font-semibold">5+ years</span> of industry experience in developing and maintaining scalable software systems.
                        </p>

                        <p className=" md:text-xl text-muted-foreground leading-relaxed">
                            Skilled across the full stack, with strong expertise in <span className="text-blue-400 font-medium">JavaScript, React, Java, and Spring Boot</span>.
                        </p>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Currently contributing as an <span className="text-foreground font-semibold"> Associate Technical Lead </span> to the warehouse management system of the world&apos;s largest food distributor,
                            <span className="text-foreground font-semibold"> Sysco. </span> Started as a Junior Software Engineer, helping to modernize a legacy monolithic application.
                            Now collaborating with cross-functional teams to design and implement new features that have a multi-million-dollar impact.
                        </p>
                    </div>
                </div>

                {/* Right Side - Tech Stack Cards */}
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {techCategories.map((category, index) => (
                            <SpotlightCard
                                key={index}
                                className="bg-white/2 backdrop-blur-sm border-white/10"
                                spotlightColor="rgba(59, 130, 246, 0.15)"
                            >
                                <div className="space-y-3">
                                    <h4 className="text-sm md:text-lg font-semibold text-foreground">{category.title}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-[8px] md:text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack Section with Logo Loop */}
            {/* Mobile view*/}
            <div className="md:hidden text-center">
                <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="right"
                    logoHeight={30}
                    gap={40}
                    hoverSpeed={40}
                    scaleOnHover
                    ariaLabel="Technology stack and expertise"
                    fadeOut
                    fadeOutColor="#000000"
                />
            </div>
            {/* Desktop view*/}
            <div className="hidden md:flex text-center">
                <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="right"
                    logoHeight={40}
                    gap={60}
                    hoverSpeed={40}
                    scaleOnHover
                    ariaLabel="Technology stack and expertise"
                    fadeOut
                    fadeOutColor="#000000"
                />
            </div>
        </section>
    );
};

export default About;