'use client'

import React, { useState } from 'react';
import SpotlightCard from "@/components/card";
import ShinyText from "@/components/shinney-text";

const ExperienceItem = ({ role, company, location, period, description, defaultExpanded = false }: { role: string, company: string, location: string, period: string, description: string[], defaultExpanded?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <div className="relative pl-8 pb-6 md:pb-12 last:pb-0 group">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-last:bg-transparent">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-400" />
            </div>

            <SpotlightCard
                className={`bg-white/[0.02] backdrop-blur-sm border-white/10 cursor-pointer transition-all duration-300 ${isExpanded ? 'ring-1 ring-blue-500/20 bg-white/[0.05]' : ''}`}
                spotlightColor="rgba(59, 130, 246, 0.15)"
            >
                <div 
                    className="space-y-4" 
                    onClick={() => setIsExpanded(!isExpanded)}
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                            <h4 className="text-sm sm:text-lg md:text-xl font-bold text-foreground transition-colors group-hover:text-blue-400">{role}</h4>
                            <p className="text-xs md:text-lg text-blue-400 font-medium">{company} | <span className="text-muted-foreground font-normal">{location}</span></p>
                        </div>
                        <div className="flex items-center gap-3 self-end md:self-center">
                            <div className="inline-block px-3 py-1 text-[10px] md:text-[12px] font-bold tracking-tight uppercase bg-white/5 border border-white/10 rounded-full text-muted-foreground w-fit">
                                {period}
                            </div>
                            <span className={`text-blue-500 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-6 border-t border-white/5">
                            <ul className="grid grid-cols-1 gap-3">
                                {description.map((item, index) => (
                                    <li key={index} className="text-sm md:text-xl text-muted-foreground leading-relaxed flex gap-3 group/item">
                                        <span className="text-blue-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 group-hover/item:bg-blue-400 transition-colors" />
                                        <span className="group-hover/item:text-foreground/80 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            role: "Associate Technical Lead",
            company: "Sysco Labs",
            location: "Colombo, Sri Lanka",
            period: "2024 August - Present",
            description: [
                "Worked with the USA and UK teams to develop new features in both microservices and the frontend application.",
                "Creating new AWS infrastructure to support European region expansion.",
                "Fixing distributed tracing on existing Java components.",
                "Handling production deployments with no downtime.",
                "Assist other sub-teams in resolving infrastructure issues and provide guidance on domain-related questions during feature development.",
                "Onsite hypercare production support to newly started warehouse in UK."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Sysco Labs",
            location: "Colombo, Sri Lanka",
            period: "2022 August - 2024 August",
            description: [
                "Worked on both warehouse management system modernization project and existing warehouse management application project.",
                "Implementing new features in the legacy app, modernized app, and mobile backend that support Android and Windows mobile devices including unit tests, integration tests, and automation tests.",
                "Keeping the Java components that support the main application up to date by addressing the production bugs, upgrading the Springboot libraries, implementing new features, testing them, and deploying them on the AWS.",
                "Improving the quality of the QA automation suit by implementing reusable data creation classes and improving the stability of the test cases.",
                "Worked on DevOps tasks like moving old Concourse jobs to Jenkins and updating terraform scripts.",
                "Integrating HashiCorp Vault, a secret management system into the existing application to improve the application security.",
                "Providing Level 3 support for the day-to-day operations and Hypercare support to the production deployment when needed."
            ]
        },
        {
            role: "Software Engineer",
            company: "Sysco Labs",
            location: "Colombo, Sri Lanka",
            period: "2021 March - 2022 July",
            description: [
                "Worked on the warehouse data transfer project and warehouse management system modernization project.",
                "Kafka integration to the warehouse data transfer project.",
                "API implementation to connect warehouse databases and Kafka consumers and producers.",
                "Performance testing with JMeter and optimizing the application.",
                "Integrating Datadog to the application to monitor application performance and logs.",
                "Developed an email notification system to notify the failures in the production environment.",
                "Implemented API endpoints to manipulate the Kafka message queue offset.",
                "Implementing automation suit to test data syncing through Kafka queues.",
                "Implementing features on the modernization project by gathering the requirements from the legacy codebase."
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "Zeno Innovations",
            location: "Colombo, Sri Lanka",
            period: "2019 August - 2020 February",
            description: [
                "Involved in requirement gathering, designing, and developing an ERP solution for a Prawn exporter.",
                "Handle customer demos and addressed requirement changes after the initial demo"
            ]
        }
    ];

    return (
        <section id="experience" className="relative z-10 md:py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
                <div className="space-y-6 lg:sticky lg:top-32 h-fit">
                    <div className="space-y-4">
                        <div className="inline-block px-3 py-1 text-[10px] md:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                            Professional Path
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-linear-to-br from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent tracking-tight">
                            <ShinyText
                                text="Work Experience"
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
                    <p className="text-sm md:text-lg text-muted-foreground max-w-md leading-relaxed">
                        From a startup intern to engineering scalable solutions for a Fortune 500 giant.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent" />
                    
                    <div className="space-y-2">
                        {experiences.map((exp, index) => (
                            <ExperienceItem key={index} {...exp} defaultExpanded={index === 0} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
