"use client";

import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FallbackTooth } from "./FallbackTooth";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingTooth() {
    const toothRef = useRef<THREE.Group>(null);
    const { viewport } = useThree();
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Responsive scale
    const scale = viewport.width < 7 ? 0.4 : 0.6;

    useEffect(() => {
        if (!toothRef.current) return;

        // Initial position - RIGHT side of screen
        toothRef.current.position.set(3, 0, 0);
        toothRef.current.rotation.set(0, 0, 0);

        const ctx = gsap.context(() => {
            // Animation 1: Move from RIGHT to LEFT as we scroll through hero section
            gsap.to(toothRef.current!.position, {
                x: -3, // Move to LEFT side
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom center",
                    scrub: 1, // Smooth scrubbing animation tied to scroll
                }
            });

            // Also add slight rotation as it moves
            gsap.to(toothRef.current!.rotation, {
                y: Math.PI * 0.5, // Quarter turn
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom center",
                    scrub: 1,
                }
            });

            // Animation 2: Fade out when leaving hero and entering treatment section
            ScrollTrigger.create({
                trigger: "#about", // The "about" section after hero
                start: "top center",
                onEnter: () => {
                    // Fade out when entering about/treatment section
                    if (toothRef.current) {
                        gsap.to(toothRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.5, ease: "power2.in" });
                    }
                    setIsVisible(false);
                },
                onLeaveBack: () => {
                    // Fade back in when scrolling back up to hero
                    if (toothRef.current) {
                        gsap.to(toothRef.current.scale, { x: scale, y: scale, z: scale, duration: 0.5, ease: "power2.out" });
                    }
                    setIsVisible(true);
                }
            });
        });

        return () => ctx.revert();
    }, [scale]);

    useFrame((state) => {
        if (toothRef.current && isVisible) {
            // Floating animation - gentle bob
            toothRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.002;

            // Mouse interaction - faster rotation on hover
            if (isHovered) {
                toothRef.current.rotation.y += 0.01;
            }
        }
    });

    return (
        <group
            ref={toothRef}
            scale={[scale, scale, scale]}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            <FallbackTooth />
        </group>
    );
}
