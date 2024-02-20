import React from "react";
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import marsmap1k from "/images/marsmap1k.jpg";

export default function MarsMesh({ onClick }) {
    const myMesh = React.useRef()
    const colorMap = useLoader(TextureLoader, marsmap1k)
    useFrame(() => {
        myMesh.current.rotation.y -= 0.005
    })

    return (
        <Sphere ref={myMesh}
            onClick={(event) => onClick(event, "Mars")}
            rotation={[Math.PI / 1.3, -3, -3]}
            visible args={[0.5, 32, 32]} scale={1.01}
            position={[3.4, 2.2, -1.5]}>
            <sphereGeometry attach="material" />
            <meshStandardMaterial
                map={colorMap}
                roughness={0.9}
                name="Mars" />
            {/* <MeshDistortMaterial map={colorMap} /> */}
        </Sphere>
    )
}