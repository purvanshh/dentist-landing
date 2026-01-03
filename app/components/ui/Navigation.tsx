"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
                scrolled
                    ? "glass-nav shadow-xl shadow-indigo-500/10"
                    : "bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div 
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30"
                    >
                        D
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                        DentalWellness
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            href="#contact"
                            className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95"
                        >
                            Book Now
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden w-10 h-10 rounded-xl glass-card-strong flex items-center justify-center text-slate-800 dark:text-white shadow-lg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="px-6 pb-6 flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-800 dark:text-white hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-4"
                            >
                                <Link
                                    href="#contact"
                                    className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
