"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const doctors = [
    {
        quote:
            "With over 15 years of experience in cosmetic dentistry, I'm passionate about creating beautiful, natural-looking smiles. Every patient deserves to feel confident about their smile.",
        name: "Dr. Emily Chen",
        designation: "Cosmetic Specialist • 15+ Years Experience",
        src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    },
    {
        quote:
            "Orthodontics is more than just straightening teeth—it's about improving overall oral health and boosting self-esteem. I use the latest technology to ensure efficient, comfortable treatment.",
        name: "Dr. James Wilson",
        designation: "Orthodontist • Board Certified",
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    },
    {
        quote:
            "Healthy gums are the foundation of a healthy smile. My approach combines gentle care with advanced techniques to treat and prevent periodontal disease effectively.",
        name: "Dr. Sarah Johnson",
        designation: "Periodontist • Gum Health Expert",
        src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
    },
    {
        quote:
            "I believe in treating the whole patient, not just the tooth. Pain-free dentistry and patient comfort are my top priorities. Your dental health is in caring hands.",
        name: "Dr. Michael Park",
        designation: "General Dentist • Family Care",
        src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
    },
    {
        quote:
            "Restoring smiles through dental implants and reconstructive procedures brings me immense joy. I'm committed to giving patients back their confidence and quality of life.",
        name: "Dr. Lisa Martinez",
        designation: "Prosthodontist • Implant Specialist",
        src: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80",
    },
];

export default function Team() {
    return (
        <section id="team" className="relative w-full py-32 px-6 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 section-glass pointer-events-none" />
            <div className="absolute top-20 right-20 w-80 h-80 bg-purple-400/25 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-10 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
            
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card-strong text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider mb-6 shadow-lg">
                        OUR TEAM
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">EXPERTS</span>
                    </h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-400 mx-auto rounded-full shadow-lg shadow-indigo-500/30" 
                    />
                    <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
                        Our team of experienced dental professionals is dedicated to providing you with the highest quality care.
                    </p>
                </motion.div>

                <AnimatedTestimonials testimonials={doctors} autoplay />
            </div>
        </section>
    );
}
