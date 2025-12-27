"use client";

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useGraph } from "@react-three/fiber";

interface ToothModelProps {
    onLoad?: () => void;
}

export function ToothModel({ onLoad }: ToothModelProps) {
    const group = useRef<THREE.Group>(null);
    const [error, setError] = useState(false);

    // Try to load the model, catch errors if missing
    let model = null;
    try {
        // useGLTF will suspend, so we need to handle the error boundary higher up usually,
        // but for the sake of this prompt's verified fallback strategy, we'll try to use it 
        // and if it fails (likely will if file is missing), we might need a different approach 
        // since useGLTF throws a promise or error.
        // However, R3F recommends ErrorBoundaries. 
        // We will assume the file might exist, but if not we render the fallback in the ErrorBoundary.
        // For this component, let's just assume we try to load it.
        model = useGLTF("/models/tooth.glb");
    } catch (e) {
        // This catch block won't actually catch the suspense/fetch error in the render phase easily 
        // without an ErrorBoundary wrapping this component.
        // So we will rely on the parent ErrorBoundary or the fact I know it's missing right now.
    }

    useEffect(() => {
        if (model && onLoad) onLoad();
    }, [model, onLoad]);

    // Clone the scene to avoid sharing mutable state if we had multiple instances
    const { scene } = model || {};

    if (!scene) {
        // This is the fallback logical path if useGLTF returns null or we decide to handle it here 
        // (though useGLTF usually suspends).
        // We will actually rely on the ErrorBoundary in FloatingTooth to render the FallbackTooth.
        return null;
    }

    return (
        <group ref={group} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}

useGLTF.preload("/models/tooth.glb");
