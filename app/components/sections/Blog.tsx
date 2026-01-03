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
        <section id="blog" className="relative w-full py-32 px-6">
            {/* Background blobs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl" />
            <div className="absolute bottom-40 right-10 w-80 h-80 bg-indigo-400/15 rounded-full blur-3xl" />
            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative">
                {/* Left: Sticky Header */}
                <div className="md:w-1/3">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-32"
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card-strong text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider mb-6 shadow-lg">
                            INSIGHTS
                        </span>
                        <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500">JOURNAL</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                            Insights, news, and dental health advice from our experts.
                        </p>
                        <motion.button 
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card-strong text-indigo-600 dark:text-indigo-400 font-bold shadow-lg hover:shadow-xl transition-shadow group"
                        >
                            View All Articles 
                            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right: Article List */}
                <div className="md:w-2/3 flex flex-col gap-6">
                    {articles.map((article, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ x: 10 }}
                            className="group glass-card-strong rounded-2xl p-5 cursor-pointer flex gap-6 hover:shadow-2xl hover:shadow-indigo-500/15 transition-all duration-300"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="relative w-36 h-36 rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
                            >
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                            <div className="flex-1 py-2">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white uppercase tracking-wider shadow-md">{article.category}</span>
                                    <span className="text-sm text-slate-400">{article.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3">
                                    {article.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
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
