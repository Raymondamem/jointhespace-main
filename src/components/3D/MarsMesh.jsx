import React from "react";
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import marsmap1k from "/images/marsmap1k.jpg";

export default function MarsMesh() {
    const myMesh = React.useRef()
    const colorMap = useLoader(TextureLoader, marsmap1k)
    useFrame(() => {
        myMesh.current.rotation.y -= 0.005
    })

    return (
        <Sphere ref={myMesh}
            rotation={[Math.PI / 1.1, -3, -3]}
            visible args={[0.5, 32, 32]} scale={1.01}
            position={[3.9, 1.28, 1]}>
            <sphereGeometry attach="material" />
            <meshStandardMaterial
                map={colorMap}
                roughness={0.9}
                name="Mars" />
            {/* <MeshDistortMaterial map={colorMap} /> */}
        </Sphere>
    )
}