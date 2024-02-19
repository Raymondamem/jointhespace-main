import React from "react";
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import earthmap1k from "/images/earthmap1k.jpg";

export default function EarthMesh({ onClick }) {
    const myMesh = React.useRef()
    const colorMap = useLoader(TextureLoader, earthmap1k)
    useFrame(() => {
        myMesh.current.rotation.y -= 0.009
    })

    return (
        <Sphere ref={myMesh}
            onClick={(event) => onClick(event, "Earth")}
            rotation={[Math.PI / 1.1, -3, -3]}
            visible args={[0.5, 32, 32]} scale={2.5}
            position={[-3, -0.1, 1]}>
            <sphereGeometry attach="material" />
            <meshStandardMaterial
                map={colorMap}
                roughness={0.9}
                name="Earth" />
            {/* <MeshDistortMaterial map={colorMap} distort={1} /> */}
        </Sphere>
    )
}