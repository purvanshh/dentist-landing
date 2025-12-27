"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full flex items-center justify-center px-6 pt-20"
        >
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider mb-6 dark:bg-blue-900/30 dark:text-blue-300">
                            MODERN DENTISTRY
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] dark:text-white"
                    >
                        COMPLETE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                            DENTAL WELLNESS.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed dark:text-slate-400"
                    >
                        Experience a refined approach to dental care.
                        We combine advanced technology with a compassionate touch to create smiles that inspire confidence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
                    >
                        <Button className="w-full sm:w-auto">
                            Schedule a Visit
                        </Button>
                        <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 px-4">
                            <span className="text-yellow-500 text-lg">★</span>
                            4.9 (1,358 reviews)
                        </div>
                    </motion.div>
                </div>

                {/* Right Content - 3D Tooth placeholder area, 
            though the 3D model is fixed in canvas, we use this space layout-wise 
            to ensure text doesn't overlap centered model too much if we want it side-by-side on desktop.
            However, prompt said "Floating 3D tooth positioned centrally" for Hero.
            If centrally, maybe we should center the text or make sure the text is on top.
            "Hero Section... Floating 3D tooth positioned centrally".
            If text is "Full-screen viewport... positioned centrally", usually that means text is over it or around it.
            But the layout description lists "Display review count" etc.
            I'll stick to a balanced layout where text is on the left/center-left and tooth is visually center-right or center.
        */}
                <div className="hidden md:block h-full min-h-[500px]" aria-hidden="true">
                    {/* Space reserver for the 3D element which is fixed positioned but visually should occupy this void */}
                </div>
            </div>

            {/* Background Particles or Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white pointer-events-none -z-10 dark:from-blue-950/20 dark:to-black" />
        </section>
    );
}
