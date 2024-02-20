import React from "react";
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import moonmap1k from "/images/moonmap1k.jpg";

export default function MoonMesh({ onClick }) {
    const myMesh = React.useRef()
    const colorMap = useLoader(TextureLoader, moonmap1k)
    useFrame(() => {
        myMesh.current.rotation.y -= 0.005
    })

    return (
        <Sphere ref={myMesh}
            onClick={(event) => onClick(event, "Moon")}
            rotation={[Math.PI / 1.3, -3, -3]}
            visible args={[0.5, 32, 32]} scale={1.6}
            position={[3.3, 0.5, 0.6]}>
            <sphereGeometry attach="material" />
            <meshStandardMaterial
                map={colorMap}
                roughness={0.9}
                name="Moon" />
            {/* <MeshDistortMaterial map={colorMap} /> */}
        </Sphere>
    )
}