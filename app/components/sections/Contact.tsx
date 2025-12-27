"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Contact() {
    return (
        <footer id="contact" className="relative w-full bg-slate-900 text-white pt-32 pb-12 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                    {/* Left: Contact Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold mb-12"
                        >
                            LET'S TALK.
                        </motion.h2>

                        <div className="space-y-8 text-lg text-slate-300">
                            <div>
                                <h3 className="text-white font-bold mb-2">Visit Us</h3>
                                <p>123 Dental Avenue, Suite 400<br />San Francisco, CA 94103</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">Contact</h3>
                                <p>hello@dentalwellness.com<br />+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">Hours</h3>
                                <p>Mon-Fri: 9am - 6pm<br />Sat: 10am - 4pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Name" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500" />
                                <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500" />
                            </div>
                            <input type="text" placeholder="Subject" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500" />
                            <textarea rows={4} placeholder="Message" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500" />

                            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white border-none py-4 text-base">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>&copy; 2024 Dental Wellness. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
