import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
    SoftwareLicenseIcon, 
    GlobalSearchIcon, 
    CloudServerIcon, 
    AiViewIcon
} from '@hugeicons/core-free-icons';
import { 
    SiReact, 
    SiNextdotjs, 
    SiTypescript, 
    SiTailwindcss,
    SiSpringboot,
    SiJenkins
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa6';
import { GrOracle } from 'react-icons/gr';
import LogoLoop from "@/app/components/react-bits/LogoLoop";


const techLogos = [
    { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs color="#FFFFFF" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaJava color="#007396" />, title: "Java", href: "https://www.java.com" },
    { node: <SiSpringboot color="#6DB33F" />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
    { node: <FaAws color="#FF9900" />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <GrOracle color="#F80000" />, title: "Oracle", href: "https://www.oracle.com" },
    { node: <SiJenkins color="#D24939" />, title: "Jenkins", href: "https://www.jenkins.io" },
];

const SkillCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
        <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
            <HugeiconsIcon icon={icon} size={20} />
        </div>
        <div>
            <h4 className="font-semibold text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
    </div>
);

const About = () => {
    return (
        <div className="h-dvh">
            <div id="about" className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[80vh] px-6 pt-24 pb-12 gap-16 max-w-7xl mx-auto">
                <div className="flex flex-col items-start justify-center text-left flex-1 space-y-8">
                   <div className="space-y-4">
                       <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                           My Background
                       </div>
                       <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                           About Me
                       </h2>
                   </div>

                   <p className="text-lg text-muted-foreground leading-relaxed">
                       Software Engineer with 5+ years of industry experience in developing and maintaining scalable software systems.
                       Proficient in full-stack development with expertise in <span className="text-foreground font-medium">JavaScript, React, Java, and Spring Boot</span>.
                   </p>

                   <p className="text-lg text-muted-foreground leading-relaxed">
                       Currently contributing to the warehouse management system of the world&apos;s largest food distributor.
                       A dedicated individual with a passion for continuous learning, always exploring new technologies to expand my skill set and add greater value to the organization.
                   </p>
                </div>

                <div className="flex-1 w-full max-w-lg lg:max-w-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <SkillCard
                            icon={SoftwareLicenseIcon}
                            title="Full Stack Dev"
                            description="Expertise in modern frontend and backend frameworks."
                        />
                        <SkillCard
                            icon={CloudServerIcon}
                            title="Cloud & DevOps"
                            description="Proficient in AWS and CI/CD automation pipelines."
                        />
                        <SkillCard
                            icon={GlobalSearchIcon}
                            title="Agile Mindset"
                            description="Experienced in collaborative Agile environments."
                        />
                        <SkillCard
                            icon={AiViewIcon}
                            title="Scalability"
                            description="Building resilient enterprise-grade applications."
                        />
                    </div>
                </div>
            </div>
            <LogoLoop
                logos={techLogos}
                speed={50}
                direction="right"
                logoHeight={40}
                gap={60}
                hoverSpeed={40}
                scaleOnHover
                ariaLabel="Technology partners"
            />
        </div>
    );
};

export default About;