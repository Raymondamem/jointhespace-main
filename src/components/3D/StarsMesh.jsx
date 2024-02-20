import * as THREE from 'three';
import { BufferGeometry, Float32BufferAttribute, Points, PointsMaterial } from 'three';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

export default function StarsMesh() {
    const { scene } = useThree();
    const ref = useRef();

    useEffect(() => {
        const vertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000);
            const y = THREE.MathUtils.randFloatSpread(2000);
            const z = THREE.MathUtils.randFloatSpread(2000);
            vertices.push(x, y, z);
        }

        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

        const material = new PointsMaterial({ color: 0x888888 });

        ref.current = new Points(geometry, material);
        scene.add(ref.current);

        return () => {
            scene.remove(ref.current);
            geometry.dispose();
            material.dispose();
        };
    }, [scene]);

    return null;
};
