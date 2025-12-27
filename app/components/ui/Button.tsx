"use client";

import * as React from "react";

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
}

export default function Button({
    className,
    variant = "default",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
        outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900",
        ghost: "bg-transparent hover:bg-slate-100 text-slate-900",
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
