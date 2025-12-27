"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingToothCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Flip when entering "Our Philosophy" (About section)
            ScrollTrigger.create({
                trigger: "#about",
                start: "top 80%",
                onEnter: () => setIsFlipped(true),
                onLeaveBack: () => setIsFlipped(false),
            });

            // Move from RIGHT to LEFT as we scroll through hero
            gsap.fromTo(containerRef.current,
                { x: 0 },
                {
                    x: "-40vw",
                    scrollTrigger: {
                        trigger: "#hero",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.5,
                    }
                }
            );

            // Fade out deeper into about section
            ScrollTrigger.create({
                trigger: "#about",
                start: "50% top",
                onEnter: () => {
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3
                    });
                    setIsVisible(false);
                },
                onLeaveBack: () => {
                    gsap.to(containerRef.current, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3
                    });
                    setIsVisible(true);
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed top-1/2 right-[15%] -translate-y-1/2 z-40"
            style={{ perspective: "1000px" }}
        >
            <div
                className="relative w-[260px] h-[340px] md:w-[300px] md:h-[400px] transition-transform duration-700 ease-out"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 via-white to-blue-50 border border-blue-100"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="w-full h-full p-4 flex flex-col">
                        <div className="relative flex-1 rounded-xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1667133295315-820bb6481730?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D"
                                alt="Dental Care"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="mt-3 text-center">
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
                                Premium Care
                            </span>
                        </div>
                    </div>
                </div>

                {/* Back Side - Shows when flipped */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-cyan-100 via-white to-cyan-50 border border-cyan-100"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="w-full h-full p-4 flex flex-col">
                        <div className="relative flex-1 rounded-xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
                                alt="Beautiful Smile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="mt-3 text-center">
                            <span className="inline-block px-4 py-2 rounded-full bg-cyan-600 text-white text-sm font-semibold">
                                Your Best Smile
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
