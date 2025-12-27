"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface RadiusOnScrollProps {
    children: React.ReactNode;
    className?: string;
    startRadius?: number;
    endRadius?: number;
}

export default function RadiusOnScroll({
    children,
    className = "",
    startRadius = 0,
    endRadius = 40,
}: RadiusOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const radius = useTransform(scrollYProgress, [0, 1], [startRadius, endRadius]);

    return (
        <motion.div
            ref={ref}
            style={{ borderRadius: radius }}
            className={`overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    );
}
