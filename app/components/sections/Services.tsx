"use client";

import { motion } from "framer-motion";
import RadiusOnScroll from "../effects/RadiusOnScroll";
import { ArrowRight, Sparkles, Activity, Smile } from "lucide-react";

export default function Services() {
    const services = [
        { title: "Cosmetic Dentistry", desc: "Whitening, veneers, and smile makeovers.", icon: <Sparkles className="w-6 h-6" /> },
        { title: "General Care", desc: "Routine checkups and preventative hygiene.", icon: <Activity className="w-6 h-6" /> },
        { title: "Orthodontics", desc: "Clear aligners and modern braces.", icon: <Smile className="w-6 h-6" /> },
        { title: "Implants", desc: "Permanent solutions for missing teeth.", icon: <Sparkles className="w-6 h-6" /> },
    ];

    return (
        <section id="services" className="relative w-full py-32 px-6 bg-slate-50 dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            WORLD CLASS <br /> TREATMENTS
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Cutting-edge technology meets expert care. We offer a comprehensive range of dental services.
                        </p>
                    </motion.div>

                    <div className="hidden md:block w-32 h-1 bg-blue-600/20 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <RadiusOnScroll startRadius={10} endRadius={40} className="bg-white dark:bg-zinc-800 p-8 h-full shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-zinc-700">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all cursor-pointer">
                                    Learn More <ArrowRight size={16} />
                                </div>
                            </RadiusOnScroll>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
