"use client";

import { motion } from "framer-motion";
import UnfocusedEffect from "../effects/UnfocusedEffect";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah L.",
        quote: "I never thought I could love my smile this much. The team made me feel so comfortable.",
        treatment: "Invisalign",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    {
        name: "Michael R.",
        quote: "Professional, clean, and incredibly high-tech. Best dental experience I've had.",
        treatment: "Implants",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
        name: "Jessica T.",
        quote: "The 3D scanning process was fascinating. No more goopy impressions!",
        treatment: "Veneers",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    }
];

export default function Stories() {
    return (
        <section id="stories" className="relative w-full py-32 px-6 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-40 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
            
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card-strong text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider mb-6 shadow-lg">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        REAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500">STORIES</span>
                    </h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        See the transformations that change lives.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Testimonials List */}
                    <div className="flex flex-col gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="p-6 rounded-2xl glass-card-strong flex gap-4 items-start cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/15"
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-3 ring-indigo-500/30 shadow-lg"
                                >
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </motion.div>
                                <div className="flex-1">
                                    <p className="text-base text-slate-700 dark:text-slate-300 italic mb-3">"{t.quote}"</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-slate-900 dark:text-white">{t.name}</span>
                                        <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium shadow-md">{t.treatment}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Before/After Visual Feature */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <UnfocusedEffect blurAmount={8} chromaticAberration={4}>
                            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20">
                                <Image
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                                    alt="Patient smiling after dental treatment"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-white"
                                    >
                                        <h3 className="text-2xl font-bold mb-2">Patient Transformation</h3>
                                        <p className="text-white/80">Before & After Gallery</p>
                                    </motion.div>
                                </div>
                                {/* Decorative gradient border */}
                                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
                            </div>
                        </UnfocusedEffect>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
