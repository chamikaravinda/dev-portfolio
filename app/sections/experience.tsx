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
                "Worked with the USA and UK teams to develop new features for the warehouse web application and for the handheld devices that are used by more than 15,000 users across 100+ warehouses.",
                "Updated Terraform scripts and Jenkins pipelines to create new AWS infrastructure for UK expansion.",
                "Provided on-site hyper care support for a newly launched warehouse in London for 2 weeks and managed to keep the operations running smoothly from the start.",
                "Provided Level 3 production support to all the warehouses in the United States when needed.",
                "Implemented an event-driven framework that supports both PL/SQL code and Java microservices using Kafka, AWS Lambda, and Event Bridge rules.",
                "Guided other team members on both domain and technical issues during the design and development of new features.",
                "Created Datadog alerts to identify production issues proactively, so that the warehouse operations can be carried out with minimal impact.",
                "Optimized performance for long-running processes, reducing execution time by 60%"
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Sysco Labs",
            location: "Colombo, Sri Lanka",
            period: "2022 August - 2024 August",
            description: [
                "Identified and fixed issues on the Java backend and legacy PL/SQL that facilitate both Android and Windows CE handheld devices.",
                "Implemented features in the modernized React web app by extracting the logic from the legacy Oracle Forms, with unit tests, integration tests, and automation tests.",
                "Kept the Java components that support the main application up to date by addressing production bugs, upgrading Spring Boot libraries, implementing new features, testing them, and deploying them on AWS.",
                "Assisted the QA team in improving the automation test suite by implementing reusable classes and improving the stability of test cases, which resulted in significantly reducing manual regression effort.",
                "Made improvements in the DevOps area such as migrating old Concourse jobs to Jenkins and updating Terraform scripts.",
                "Integrated the HashiCorp Vault secret manager into the legacy application to improve application security."
            ]
        },
        {
            role: "Software Engineer",
            company: "Sysco Labs",
            location: "Colombo, Sri Lanka",
            period: "2021 March - 2022 July",
            description: [
                "Key member in the team that developed the data transfer system between warehouse databases using Kafka, unlocking cross-dock capabilities for Sysco.",
                "Implemented a multi-tenant API to provide Kafka consumers and producers with access to warehouse databases.",
                "Optimized application performance by conducting load tests with JMeter.",
                "Integrated Datadog into the application to monitor performance metrics and logs.",
                "Developed an email notification system to alert the team of failures in the production environment.",
                "Implemented API endpoints to manage Kafka message queue offsets.",
                "Implemented an automation suite to test data synchronization through Kafka queues."
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
