"use client";

import { motion } from "framer-motion";
import UnfocusedEffect from "../effects/UnfocusedEffect";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative w-full py-32 px-6 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                        <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                            Our Philosophy
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            A REFINED APPROACH <br />
                            TO DENTAL CARE
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                            We're passionate about your smile. Our dedicated team and modern treatments ensure
                            the health and beauty you desire. Schedule a consultation and smile confidently.
                        </p>
                    </motion.div>

                    <UnfocusedEffect blurAmount={12} chromaticAberration={6}>
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                                alt="Modern dental clinic interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </UnfocusedEffect>
                </div>
            </div>
        </section>
    );
}
