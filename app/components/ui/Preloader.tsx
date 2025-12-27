"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const { progress } = useProgress();
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        if (progress === 100) {
            // Small delay to ensure smooth transition
            const timer = setTimeout(() => setComplete(true), 500);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white dark:bg-black"
                >
                    <div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-blue-600"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>
                    <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                        Scanning 3D Model... {Math.round(progress)}%
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
