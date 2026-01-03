"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
    className,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
    className?: string;
}) => {
    const [active, setActive] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    // Generate deterministic rotations based on index to avoid hydration mismatch
    const rotations = useMemo(() => {
        return testimonials.map((_, index) => {
            // Use a simple deterministic formula based on index
            const baseRotation = ((index * 7) % 21) - 10;
            return baseRotation;
        });
    }, [testimonials]);

    const getRotation = (index: number) => rotations[index] || 0;

    // Don't render animations until mounted to avoid hydration mismatch
    if (!mounted) {
        return (
            <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <div className="relative h-80 w-full">
                            {testimonials[0] && (
                                <div className="absolute inset-0 origin-bottom">
                                    <Image
                                        src={testimonials[0].src}
                                        alt={testimonials[0].name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between flex-col py-4">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground">
                                {testimonials[0]?.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {testimonials[0]?.designation}
                            </p>
                            <p className="text-lg text-muted-foreground mt-8">
                                {testimonials[0]?.quote}
                            </p>
                        </div>
                        <div className="flex gap-4 pt-12 md:pt-0">
                            <button className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center">
                                <IconArrowLeft className="h-5 w-5 text-foreground" />
                            </button>
                            <button className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center">
                                <IconArrowRight className="h-5 w-5 text-foreground" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: getRotation(index),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : getRotation(index),
                                        zIndex: isActive(index)
                                            ? 999
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: getRotation(index),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex justify-between flex-col py-4">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <h3 className="text-2xl font-bold text-foreground">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="text-lg text-muted-foreground mt-8">
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
                        >
                            <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
                        >
                            <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
