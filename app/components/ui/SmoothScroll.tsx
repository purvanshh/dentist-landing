"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    // Scroll to top on page load/reload
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children as any}
        </ReactLenis>
    )
}
