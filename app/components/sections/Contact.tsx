"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { MapPin, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="relative w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white pt-32 pb-12 px-6 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                    {/* Left: Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold tracking-wider mb-6">
                                GET IN TOUCH
                            </span>
                        </motion.div>
                        
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-12"
                        >
                            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">TALK.</span>
                        </motion.h2>

                        <div className="space-y-6">
                            {[
                                { icon: <MapPin className="w-5 h-5" />, title: "Visit Us", content: "123 Dental Avenue, Suite 400\nSan Francisco, CA 94103" },
                                { icon: <Mail className="w-5 h-5" />, title: "Contact", content: "hello@dentalwellness.com\n+1 (555) 123-4567" },
                                { icon: <Clock className="w-5 h-5" />, title: "Hours", content: "Mon-Fri: 9am - 6pm\nSat: 10am - 4pm" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                        <p className="text-slate-400 whitespace-pre-line text-sm">{item.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl shadow-indigo-500/5"
                    >
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <motion.input 
                                    whileFocus={{ scale: 1.01 }}
                                    type="text" 
                                    placeholder="Name" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-slate-500 text-white" 
                                />
                                <motion.input 
                                    whileFocus={{ scale: 1.01 }}
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-slate-500 text-white" 
                                />
                            </div>
                            <motion.input 
                                whileFocus={{ scale: 1.01 }}
                                type="text" 
                                placeholder="Subject" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-slate-500 text-white" 
                            />
                            <motion.textarea 
                                whileFocus={{ scale: 1.01 }}
                                rows={4} 
                                placeholder="Message" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-slate-500 text-white resize-none" 
                            />

                            <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 text-white border-none py-4 text-base gap-2">
                                <Send className="w-4 h-4" />
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom Footer */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm"
                >
                    <p>&copy; 2024 Dental Wellness. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {["Privacy", "Terms", "Instagram"].map((link) => (
                            <motion.a 
                                key={link}
                                whileHover={{ y: -2 }}
                                href="#" 
                                className="hover:text-indigo-400 transition-colors"
                            >
                                {link}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
