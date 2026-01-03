"use client";

import { motion } from "framer-motion";
import RadiusOnScroll from "../effects/RadiusOnScroll";
import { ArrowRight, Sparkles, Activity, Smile } from "lucide-react";

export default function Services() {
    const services = [
        { title: "Cosmetic Dentistry", desc: "Whitening, veneers, and smile makeovers.", icon: <Sparkles className="w-6 h-6" />, gradient: "from-pink-500 to-rose-500" },
        { title: "General Care", desc: "Routine checkups and preventative hygiene.", icon: <Activity className="w-6 h-6" />, gradient: "from-indigo-500 to-purple-500" },
        { title: "Orthodontics", desc: "Clear aligners and modern braces.", icon: <Smile className="w-6 h-6" />, gradient: "from-cyan-500 to-blue-500" },
        { title: "Implants", desc: "Permanent solutions for missing teeth.", icon: <Sparkles className="w-6 h-6" />, gradient: "from-amber-500 to-orange-500" },
    ];

    return (
        <section id="services" className="relative w-full py-32 px-6 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 section-glass pointer-events-none" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
            
            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card-strong text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider mb-6 shadow-lg">
                            OUR SERVICES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            WORLD CLASS <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500">TREATMENTS</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Cutting-edge technology meets expert care. We offer a comprehensive range of dental services.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:block w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-30 blur-xl" 
                    />
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
                            <RadiusOnScroll startRadius={16} endRadius={32} className="glass-card-strong p-8 h-full hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2">
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/30`}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold cursor-pointer"
                                >
                                    Learn More <ArrowRight size={16} />
                                </motion.div>
                            </RadiusOnScroll>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
