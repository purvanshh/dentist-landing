"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full flex items-center justify-center px-6 pt-24 overflow-hidden"
        >
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ 
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ 
                        x: [0, -20, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ 
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card-strong text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider mb-6 shadow-lg">
                            <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse" />
                            MODERN DENTISTRY
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]"
                    >
                        COMPLETE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-400 animate-gradient">
                            DENTAL WELLNESS.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed"
                    >
                        Experience a refined approach to dental care.
                        We combine advanced technology with a compassionate touch to create smiles that inspire confidence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
                    >
                        <Button className="w-full sm:w-auto shadow-xl shadow-indigo-500/25">
                            Schedule a Visit
                        </Button>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 px-6 py-4 rounded-2xl glass-card-strong cursor-pointer"
                        >
                            <span className="text-yellow-500 text-xl drop-shadow-lg">★</span>
                            <span>4.9 <span className="text-slate-500">(1,358 reviews)</span></span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Content - 3D Tooth placeholder area */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden md:block h-full min-h-[500px]" 
                    aria-hidden="true"
                >
                    {/* Space reserver for the 3D element */}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
