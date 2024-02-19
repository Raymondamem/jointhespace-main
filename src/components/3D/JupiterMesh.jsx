import React from "react";
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import jupitermap from "/images/jupitermap.jpg";

export default function JupiterMesh() {
    const myMesh = React.useRef()
    const colorMap = useLoader(TextureLoader, jupitermap)
    useFrame(() => {
        myMesh.current.rotation.y -= 0.005
    })

    return (
        <Sphere ref={myMesh}
            rotation={[Math.PI / 1.1, -3, -3]}
            visible args={[0.5, 32, 32]}
            scale={0.7}
            position={[2, 2, 1]}>
            <sphereGeometry attach="material" />
            <meshStandardMaterial
                map={colorMap}
                roughness={0.9}
                name="jupiter" />
            {/* <MeshDistortMaterial map={colorMap} /> */}
        </Sphere>
    )
}