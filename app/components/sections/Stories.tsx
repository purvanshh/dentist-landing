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
        <section id="stories" className="relative w-full py-32 px-6 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        REAL STORIES
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        See the transformations that change lives.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Testimonials List */}
                    <div className="flex flex-col gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex gap-4 items-start"
                            >
                                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-4">"{t.quote}"</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-slate-900 dark:text-white">{t.name}</span>
                                        <span className="text-sm text-blue-600 font-medium">{t.treatment}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Before/After Visual Feature */}
                    <UnfocusedEffect blurAmount={8} chromaticAberration={4}>
                        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                                alt="Patient smiling after dental treatment"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-2">Patient Transformation</h3>
                                    <p className="text-white/80">Before & After Gallery</p>
                                </div>
                            </div>
                        </div>
                    </UnfocusedEffect>
                </div>
            </div>
        </section>
    );
}
