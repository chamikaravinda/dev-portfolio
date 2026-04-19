'use client'

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <header className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                (scrolled || isOpen)
                    ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg" 
                    : "bg-transparent border-b border-transparent"
            )}>
                <nav className="max-w-7xl mx-auto px-4 md:px-6 h-12 md:h-14 flex items-center justify-between relative z-[60]">
                    <a 
                        href="#home" 
                        onClick={() => setIsOpen(false)}
                        className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0b13f4] via-[#2ab7f4] to-[#821aea] bg-clip-text text-transparent"
                    >
                        Zigmatron Hub
                    </a>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white/80 hover:text-white transition-colors focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                    </button>
                </nav>
            </header>

            {/* Mobile Navigation Overlay */}
            <div className={cn(
                "fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-500 md:hidden z-40 overflow-y-auto",
                isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 invisible"
            )}>
                <div className="flex flex-col items-center justify-center min-h-full py-20 gap-8">
                    {navItems.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-2xl font-bold text-white/70 hover:text-white transition-all duration-300 transform",
                                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
