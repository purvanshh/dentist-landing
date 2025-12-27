"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import FloatingTooth from "@/app/components/3d/FloatingTooth";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function MainScene() {
    const [dpr, setDpr] = useState(1.5);

    useEffect(() => {
        // Adjust DPR for performance on mobile
        setDpr(Math.min(window.devicePixelRatio, 2));
    }, []);

    return (
        <div className="fixed inset-0 z-30 pointer-events-none">
            <Canvas
                dpr={dpr}
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    {/* Studio-quality lighting */}
                    <ambientLight intensity={0.6} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <pointLight position={[-10, -5, -10]} intensity={0.5} color="#a0d8ef" />
                    <spotLight
                        position={[0, 10, 5]}
                        angle={0.3}
                        penumbra={1}
                        intensity={1}
                        castShadow
                    />

                    {/* Studio environment for realistic reflections */}
                    <Environment preset="studio" />

                    <FloatingTooth />

                    {/* Subtle bloom for premium look */}
                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.9}
                            mipmapBlur
                            intensity={0.3}
                            radius={0.8}
                        />
                    </EffectComposer>

                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
