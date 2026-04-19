'use client'

import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import SpotlightCard from "@/components/card";
import toast from "react-hot-toast";

const ContactInfo = ({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) => (
    <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
            <Icon size={20} />
        </div>
        <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg font-medium hover:text-blue-400 transition-colors">
                    {value}
                </a>
            ) : (
                <p className="text-sm md:text-lg font-medium">{value}</p>
            )}
        </div>
    </div>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const loadingToast = toast.loading("Sending message...");

        const res = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        toast.dismiss(loadingToast);

        if (data.success) {
            toast.success("Message sent successfully 🚀");
            setFormData({ name: '', email: '', message: '' });
        } else {
            toast.error("Failed to send message");
        }
    };

    return (
        <section id="contact" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                            Get in Touch
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent tracking-tight">
                            What’s next? <br className="hidden md:block" /> Let’s talk.
                        </h2>
                        <p className="text-sm md:text-lg text-muted-foreground max-w-md leading-relaxed">
                            Have a project in mind or just want to say hi? Feel free to reach out using the form or through my contact details!
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-8">
                        <ContactInfo 
                            icon={FaMapMarkerAlt} 
                            label="Address" 
                            value="No 79/1/1 Old Road, Pannipitiya, Colombo" 
                        />
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                            <ContactInfo 
                                icon={FaPhoneAlt} 
                                label="Phone" 
                                value="+94 71 361 2818" 
                                href="tel:+94713612818"
                            />
                            <div className="hidden md:flex justify-center items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-500 rounded-full border border-green-500/20 text-sm font-medium w-fit">
                                <FaWhatsapp size={16} />
                                <span>Available on WhatsApp </span>
                            </div>
                        </div>
                        <ContactInfo 
                            icon={FaEnvelope} 
                            label="Email" 
                            value="chamikaravinda@gmail.com" 
                            href="mailto:chamikaravinda@gmail.com"
                        />
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                        <a 
                            href="https://linkedin.com/in/chamikaravinda/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#0077b5] hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/5 transition-all duration-300"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a 
                            href="https://github.com/chamikaravinda" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#6b7280] hover:text-[#fafafa] hover:border-[#fafafa]/50 hover:bg-[#fafafa]/5 transition-all duration-300"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a 
                            href="https://facebook.com/chamikaravinda" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#1877f2] hover:text-[#1877f2] hover:border-[#1877f2]/50 hover:bg-[#1877f2]/5 transition-all duration-300"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a 
                            href="https://www.instagram.com/zigmatron"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e4405f] hover:text-[#e4405f] hover:border-[#e4405f]/50 hover:bg-[#e4405f]/5 transition-all duration-300"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a 
                            href="https://wa.me/94713612818" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#25d366] hover:text-[#25d366] hover:border-[#25d366]/50 hover:bg-[#25d366]/5 transition-all duration-300"
                        >
                            <FaWhatsapp size={20} />
                        </a>
                    </div>
                </div>

                <div className="relative space-y-4">
                    <SpotlightCard>
                        <form onSubmit={handleSubmit} className="md:p-12 flex flex-col gap-6 backdrop-blur-md rounded-[1.4rem] h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium opacity-90">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:opacity-30"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium opacity-90">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:opacity-30"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium opacity-90">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:opacity-30 resize-none"
                                />
                            </div>

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="px-4 md:px-8 text-[12px] md:text-lg py-2.5 md:py-3.5 bg-gradient-to-r from-[#0b13f4] via-[#2ab7f4] to-[#821aea] text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(42,183,244,0.4)] transition-all duration-300 active:scale-95 w-full md:w-fit cursor-pointer flex items-center justify-center gap-2"
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane size={16} />
                                </button>
                            </div>
                        </form>
                    </SpotlightCard>
                    <SpotlightCard>
                        <div className="space-y-4">
                            <div className="text-center space-y-2">
                                <p className="text-lg font-semibold text-foreground">Want to know more about me ?</p>
                                <p className="text-xs text-muted-foreground">Download my detailed CV to learn about my experience and skills</p>
                            </div>
                            <div className="flex justify-center">
                                <a
                                    href="/cv.pdf"
                                    download="Chamika_Jayathilaka_CV.pdf"
                                    className="group px-4 md:px-8 text-[12px] md:text-lg py-2.5 md:py-3.5 bg-gradient-to-r from-[#0b13f4] via-[#2ab7f4] to-[#821aea] text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(42,183,244,0.4)] transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-2"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                    Get My CV
                                </a>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default Contact;
