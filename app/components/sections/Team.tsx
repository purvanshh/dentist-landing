"use client";

import { motion } from "framer-motion";
import RadiusOnScroll from "../effects/RadiusOnScroll";
import Image from "next/image";

const team = [
    {
        name: "Dr. Emily Chen",
        role: "Cosmetic Specialist",
        desc: "Expert in smile design.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
    },
    {
        name: "Dr. James Wilson",
        role: "Orthodontist",
        desc: "Creating perfect alignment.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
    },
    {
        name: "Dr. Sarah Johnson",
        role: "Periodontist",
        desc: "Gum health specialist.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
    },
];

export default function Team() {
    return (
        <section id="team" className="relative w-full py-32 px-6 bg-slate-50 dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">MEET THE EXPERTS</h2>
                    <div className="w-20 h-1 bg-blue-600" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="group cursor-pointer">
                                <RadiusOnScroll startRadius={8} endRadius={100} className="relative w-full h-[400px] mb-6 shadow-md overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </RadiusOnScroll>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                <p className="text-slate-500 dark:text-slate-400">{member.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
