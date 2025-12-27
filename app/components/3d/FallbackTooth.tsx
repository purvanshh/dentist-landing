"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export function FallbackTooth() {
    const groupRef = useRef<THREE.Group>(null);

    // High-end material settings to mimic the translucent enamel
    const materialProps = {
        backside: true,
        thickness: 0.6,
        roughness: 0.05,
        transmission: 1,
        ior: 1.45,
        chromaticAberration: 0.05,
        anisotropy: 0.1,
        distortion: 0.1,
        distortionScale: 0.2,
        color: "#ffffff",
        attenuationDistance: 0.5,
        attenuationColor: "#ffffff",
    };

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group ref={groupRef} rotation={[0.2, 0.4, 0]}>

                    {/* --- THE MAIN CROWN --- */}
                    <mesh position={[0, 0.4, 0]} scale={[1.1, 0.9, 1.05]}>
                        <sphereGeometry args={[0.6, 64, 64]} />
                        <MeshTransmissionMaterial {...materialProps} />
                    </mesh>

                    {/* --- THE TOP CUSPS --- */}
                    <Cusp position={[-0.22, 0.82, 0.22]} materialProps={materialProps} />
                    <Cusp position={[0.22, 0.82, 0.22]} materialProps={materialProps} />
                    <Cusp position={[-0.2, 0.78, -0.2]} materialProps={materialProps} />
                    <Cusp position={[0.2, 0.78, -0.2]} materialProps={materialProps} />

                    {/* --- THE ROOTS --- */}
                    <Root position={[-0.2, -0.3, 0.1]} rotation={[0, 0, 0.25]} materialProps={materialProps} />
                    <Root position={[0.2, -0.3, 0.1]} rotation={[0, 0, -0.25]} materialProps={materialProps} />
                    <Root position={[0, -0.4, -0.2]} rotation={[-0.2, 0, 0]} materialProps={materialProps} scale={1.1} />

                    {/* --- THE NECK (Transition) --- */}
                    <mesh position={[0, 0.1, 0]} scale={[0.8, 0.4, 0.8]}>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <MeshTransmissionMaterial {...materialProps} roughness={0.2} />
                    </mesh>
                </group>
            </Float>

            {/* Grounding the model with a soft shadow */}
            <ContactShadows
                position={[0, -1.5, 0]}
                opacity={0.3}
                scale={6}
                blur={2.5}
                far={2}
            />
        </group>
    );
}

function Cusp({ position, materialProps }: { position: [number, number, number]; materialProps: object }) {
    return (
        <mesh position={position} scale={[1, 0.5, 1]}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <MeshTransmissionMaterial {...materialProps} thickness={0.2} />
        </mesh>
    );
}

function Root({ position, rotation, materialProps, scale = 1 }: { position: [number, number, number]; rotation: [number, number, number]; materialProps: object; scale?: number }) {
    return (
        <mesh position={position} rotation={rotation} scale={scale}>
            <capsuleGeometry args={[0.15, 0.8, 16, 32]} />
            <MeshTransmissionMaterial
                {...materialProps}
                thickness={0.8}
                roughness={0.2}
            />
        </mesh>
    );
}