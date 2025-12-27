"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const articles = [
    {
        title: "The Future of Digital Dentistry",
        category: "Technology",
        date: "Oct 12, 2024",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80"
    },
    {
        title: "Why Gum Health Matters",
        category: "Wellness",
        date: "Sep 28, 2024",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80"
    },
    {
        title: "Understanding Invisalign",
        category: "Treatments",
        date: "Sep 15, 2024",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80"
    },
];

export default function Blog() {
    return (
        <section id="blog" className="relative w-full py-32 px-6 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                {/* Left: Sticky Header */}
                <div className="md:w-1/3">
                    <div className="sticky top-32">
                        <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">JOURNAL</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                            Insights, news, and dental health advice from our experts.
                        </p>
                        <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            View All Articles <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right: Article List */}
                <div className="md:w-2/3 flex flex-col gap-10">
                    {articles.map((article, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group border-b border-slate-100 dark:border-zinc-800 pb-10 cursor-pointer flex gap-6"
                        >
                            <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{article.category}</span>
                                    <span className="text-sm text-slate-400">{article.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors mb-4">
                                    {article.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 max-w-lg text-sm">
                                    Read more about how we are revolutionizing the way you experience dental care.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
