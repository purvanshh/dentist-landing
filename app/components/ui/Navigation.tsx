"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Star } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming standard Shadcn/Tailwind util exists, else I'll create it inline or use clsx directly

// Inline util if lib/utils doesn't exist yet, but usually it does in modern stacks or I'll create it momentarily.
// For now I'll implement a simple joiner to be safe.
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Treatments", href: "#services" },
        { name: "Stories", href: "#stories" },
        { name: "Our Team", href: "#team" },
        { name: "Blog", href: "#blog" },
        { name: "Contact Us", href: "#contact" },
    ];

    return (
        <nav
            className={classNames(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/70 backdrop-blur-md shadow-sm dark:bg-black/70 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Using a simple text logo or placeholder icon for now */}
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
                        D
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
                        DentalWellness
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-800 dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 dark:bg-black/95 dark:border-slate-800 p-6 flex flex-col gap-6 md:hidden shadow-2xl h-screen">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-medium text-slate-800 dark:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
