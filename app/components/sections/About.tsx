"use client";

import { motion } from "framer-motion";
import UnfocusedEffect from "../effects/UnfocusedEffect";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative w-full py-32 px-6 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
                {/* Left: 3D Tooth placeholder area */}
                <div className="hidden md:block h-[600px]" aria-hidden="true" />

                {/* Right Content */}
                <div className="flex flex-col gap-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card-strong text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider mb-6 shadow-lg">
                            OUR PHILOSOPHY
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            A REFINED APPROACH <br />
                            TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500">DENTAL CARE</span>
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                            We're passionate about your smile. Our dedicated team and modern treatments ensure
                            the health and beauty you desire. Schedule a consultation and smile confidently.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <UnfocusedEffect blurAmount={12} chromaticAberration={6}>
                            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20">
                                <Image
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                                    alt="Modern dental clinic interior"
                                    fill
                                    className="object-cover"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent" />
                                {/* Glass border effect */}
                                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
                            </div>
                        </UnfocusedEffect>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
