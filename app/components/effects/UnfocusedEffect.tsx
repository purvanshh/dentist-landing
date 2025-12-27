"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface UnfocusedEffectProps {
    children: React.ReactNode;
    blurAmount?: number;
    chromaticAberration?: number; // Simulated pixel offset
}

export default function UnfocusedEffect({
    children,
    blurAmount = 8,
    chromaticAberration = 4,
}: UnfocusedEffectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Map scroll to blur: 0 -> blur -> 0 (unfocus as you scroll away or into it)
    // For "Unfocused" background usually it starts blurred and focuses, or vice versa.
    // Interpreting "Unfocused" effect as: elements start sharp, then blur out, or distinct style for background.
    // Prompt says: "Implement 'Unfocused' blur effect on background images"
    // Let's assume it modulates based on scroll.

    const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, blurAmount, 0]);
    const offsetRed = useTransform(scrollYProgress, [0, 0.5, 1], [0, chromaticAberration, 0]);
    const offsetBlue = useTransform(scrollYProgress, [0, 0.5, 1], [0, -chromaticAberration, 0]);

    return (
        <div ref={ref} className="relative overflow-hidden group">
            {/* Simulated Chromatic Aberration Layers */}
            <motion.div
                className="absolute inset-0 z-0 opacity-70 mix-blend-screen pointer-events-none"
                style={{ left: offsetRed, filter: "blur(4px)" }} // Simple color shift simulation if content allows
                aria-hidden="true"
            >
                {/* We would need to clone children here for true effect, but that's expensive. 
            For now, applying simple filter blur on the main container. */}
            </motion.div>

            <motion.div style={{ filter: useTransform(blur, (v) => `blur(${v}px)`) }}>
                {children}
            </motion.div>
        </div>
    );
}
