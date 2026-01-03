"use client";

import * as React from "react";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ButtonProps {
    variant?: "default" | "outline" | "ghost" | "glass";
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function Button({
    className,
    variant = "default",
    children,
    disabled,
    type = "button",
    onClick,
}: ButtonProps) {
    const variants = {
        default: "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:shadow-xl hover:shadow-indigo-500/30",
        outline: "border border-slate-200/50 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white",
        ghost: "bg-transparent hover:bg-slate-100/50 text-slate-900 dark:hover:bg-white/5 dark:text-white",
        glass: "glass-card text-slate-900 dark:text-white hover:shadow-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                className
            )}
        >
            {children}
        </motion.button>
    );
}
